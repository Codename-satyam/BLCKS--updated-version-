// ═══════════════════════════════════════════════════════════════════════════
// Project Persistence Service
// Saves and loads builder projects for authenticated users
// Supports auto-save and version history
// ═══════════════════════════════════════════════════════════════════════════

class ProjectService {
    constructor() {
        this.projects = this.loadProjectsFromStorage();
        this.listeners = [];
    }

    // ── Storage Management ─────────────────────────────────────────────────
    loadProjectsFromStorage() {
        const projectsStr = localStorage.getItem('projects');
        return projectsStr ? JSON.parse(projectsStr) : [];
    }

    saveProjectsToStorage(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    // ── Project CRUD Operations ────────────────────────────────────────────
    createProject(userId, projectName, platform = 'generic', initialContent = {}) {
        const project = {
            id: `proj_${userId}_${Date.now()}`,
            userId,
            name: projectName,
            platform,
            content: initialContent,
            createdAt: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            versions: [
                {
                    timestamp: new Date().toISOString(),
                    snapshot: initialContent,
                    label: 'Initial'
                }
            ]
        };

        this.projects.push(project);
        this.saveProjectsToStorage(this.projects);
        this.notifyListeners({ type: 'project_created', project });
        return project;
    }

    getProject(projectId) {
        return this.projects.find(p => p.id === projectId);
    }

    getUserProjects(userId) {
        return this.projects.filter(p => p.userId === userId);
    }

    updateProject(projectId, updates) {
        const projectIndex = this.projects.findIndex(p => p.id === projectId);
        if (projectIndex === -1) return null;

        const project = this.projects[projectIndex];
        const updated = {
            ...project,
            ...updates,
            lastModified: new Date().toISOString()
        };

        this.projects[projectIndex] = updated;
        this.saveProjectsToStorage(this.projects);
        this.notifyListeners({ type: 'project_updated', project: updated });
        return updated;
    }

    deleteProject(projectId) {
        const index = this.projects.findIndex(p => p.id === projectId);
        if (index === -1) return false;

        this.projects.splice(index, 1);
        this.saveProjectsToStorage(this.projects);
        this.notifyListeners({ type: 'project_deleted', projectId });
        return true;
    }

    // ── Auto-save Functionality ────────────────────────────────────────────
    autoSaveProject(projectId, sectionIds, sectionContent, designSettings) {
        const project = this.getProject(projectId);
        if (!project) return null;

        const updatedContent = {
            sectionIds,
            sectionContent,
            designSettings
        };

        // Save to version history (max 50 versions)
        const newVersion = {
            timestamp: new Date().toISOString(),
            snapshot: updatedContent,
            label: `Auto-save at ${new Date().toLocaleTimeString()}`
        };

        project.versions = project.versions.slice(-49).concat(newVersion);
        
        return this.updateProject(projectId, { content: updatedContent });
    }

    // ── Version History ────────────────────────────────────────────────────
    getProjectVersions(projectId) {
        const project = this.getProject(projectId);
        return project ? project.versions : [];
    }

    restoreVersion(projectId, versionIndex) {
        const project = this.getProject(projectId);
        if (!project || !project.versions[versionIndex]) return null;

        const versionSnapshot = project.versions[versionIndex].snapshot;
        return this.updateProject(projectId, { content: versionSnapshot });
    }

    // ── Last Opened Project ────────────────────────────────────────────────
    saveLastOpenedProject(userId, projectId) {
        localStorage.setItem(`last_project_${userId}`, projectId);
    }

    getLastOpenedProject(userId) {
        return localStorage.getItem(`last_project_${userId}`) || null;
    }

    // ── Observer Pattern ───────────────────────────────────────────────────
    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notifyListeners(event) {
        this.listeners.forEach(listener => listener(event));
    }

    // ── Backup/Export ──────────────────────────────────────────────────────
    exportProject(projectId) {
        const project = this.getProject(projectId);
        if (!project) return null;

        return {
            ...project,
            exportedAt: new Date().toISOString()
        };
    }

    importProject(userId, projectData) {
        const imported = {
            ...projectData,
            id: `proj_${userId}_${Date.now()}`,
            userId,
            createdAt: new Date().toISOString(),
            lastModified: new Date().toISOString()
        };

        this.projects.push(imported);
        this.saveProjectsToStorage(this.projects);
        this.notifyListeners({ type: 'project_imported', project: imported });
        return imported;
    }
}

export const projectService = new ProjectService();
