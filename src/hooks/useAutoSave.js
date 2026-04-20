import { useEffect, useRef, useCallback, useState } from 'react';
import { projectService } from '../services/projectService';

/**
 * useAutoSave Hook
 * Automatically saves builder changes at regular intervals
 * @param {string} projectId - The project to save
 * @param {string[]} sectionIds - Array of selected section IDs
 * @param {object} sectionContent - Content of each section
 * @param {object} designSettings - Design settings for the project
 * @param {number} interval - Auto-save interval in milliseconds (default: 30000 = 30s)
 * @param {object} user - Current user object
 * @returns {object} - { isSaving, lastSaved, error, manualSave }
 */
export function useAutoSave(projectId, sectionIds, sectionContent, designSettings, user, interval = 30000) {
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);
    const [error, setError] = useState(null);
    const autoSaveTimerRef = useRef(null);
    const lastSaveStateRef = useRef(null);

    // Check if content has changed
    const hasContentChanged = useCallback(() => {
        const currentState = JSON.stringify({
            sectionIds,
            sectionContent,
            designSettings
        });

        if (lastSaveStateRef.current !== currentState) {
            lastSaveStateRef.current = currentState;
            return true;
        }
        return false;
    }, [sectionIds, sectionContent, designSettings]);

    // Perform auto-save
    const performAutoSave = useCallback(async () => {
        if (!projectId || !user || !hasContentChanged()) {
            return;
        }

        setIsSaving(true);
        setError(null);

        try {
            const result = projectService.autoSaveProject(
                projectId,
                sectionIds,
                sectionContent,
                designSettings
            );

            if (result) {
                setLastSaved(new Date());
                console.log(`✅ Auto-saved at ${new Date().toLocaleTimeString()}`);
            } else {
                setError('Failed to save project');
            }
        } catch (err) {
            setError(err.message);
            console.error('Auto-save error:', err);
        } finally {
            setIsSaving(false);
        }
    }, [projectId, user, sectionIds, sectionContent, designSettings, hasContentChanged]);

    // Setup auto-save timer
    useEffect(() => {
        if (!projectId || !user) return;

        // Clear existing timer
        if (autoSaveTimerRef.current) {
            clearInterval(autoSaveTimerRef.current);
        }

        // Set up new auto-save interval
        autoSaveTimerRef.current = setInterval(performAutoSave, interval);

        // Cleanup
        return () => {
            if (autoSaveTimerRef.current) {
                clearInterval(autoSaveTimerRef.current);
            }
        };
    }, [projectId, user, interval, performAutoSave]);

    // Manual save trigger
    const manualSave = useCallback(async () => {
        return performAutoSave();
    }, [performAutoSave]);

    return {
        isSaving,
        lastSaved,
        error,
        manualSave
    };
}
