import "./Contact.css";


export default function Contact() {
	return (
		<div id="contact" className="retro-contact-container">
			<div className="scanlines" />

			<div className="terminal-window">
				<div className="terminal-header">
					<div className="header-dots">
						<span className="dot" />
						<span className="dot" />
						<span className="dot" />
					</div>
					<h2 className="terminal-title">CONTACT_TERMINAL.EXE</h2>
				</div>

				<div className="terminal-body">
					<div className="boot-sequence">
						<p className="typewriter">{"> INITIALIZING COMMUNICATION MODULE..."}</p>
						<p className="typewriter delayed">{"> SYSTEM READY. ENTER MESSAGE:"}</p>
					</div>

					<form className="retro-form">
						<div className="input-group">
							<label htmlFor="name">NAME</label>
							<input id="name" type="text" name="name" placeholder="ENTER YOUR NAME" />
						</div>

						<div className="input-group">
							<label htmlFor="email">EMAIL</label>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="ENTER YOUR EMAIL"
							/>
						</div>

						<div className="input-group">
							<label htmlFor="message">MESSAGE</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								placeholder="TYPE YOUR MESSAGE..."
							/>
						</div>

						<button type="submit" className="retro-submit-btn">
							TRANSMIT
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
