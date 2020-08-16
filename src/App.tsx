import "./App.scss"
import React from "react"
import { SocialLinks } from "./components/SocialLinks"
import { Project } from "./components/Project"
import { FaItchIo } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai"
import { RiGamepadLine } from "react-icons/ri"

const huebImage = require("./assets/images/hueb.png")
const porImage = require("./assets/images/por.png")
const aceStationImage = require("./assets/images/acestation.png")

export const App = () => {
	return (
		<>
			<div className="cover">
				<div className="splash">
					<div>
						<h2>hi, my name is</h2>
						<h1>eric bernard.</h1>
						<SocialLinks />
						<p className="scroll-tip">
							Scroll down to learn about me
						</p>
					</div>
				</div>
			</div>
			<div className="content">
				<div>
					<section>
						<h1>Biography</h1>
						<p>
							My name is Eric Bernard and I am an avid software
							developer. I have been writing code in some form or
							another since I was about 10 years old. I am
							attending the University of Massachusetts Dartmouth,
							majoring in Computer Science and minoring in
							Mathematics. In my free time, I enjoy playing and
							making video games and music.
						</p>
						<br />
						<p>
							I am currently employed as a junior software
							engineer, primarily working with TypeScript and
							ReactJS.
						</p>
					</section>

					<section>
						<h1>Projects</h1>
						<div className="projects">
							<Project
								title="HUEb"
								image={huebImage as string}
								links={[
									{
										tooltip: "itch.io",
										href: "https://mbarba.itch.io/hueb",
										icon: <FaItchIo size={20} />,
									},
									{
										tooltip: "GitHub",
										href: "https://github.com/mvbarba/hueb",
										icon: <AiOutlineGithub size={20} />,
									},
								]}
							>
								<p>
									<b>HUEb</b> is a 3D first-person puzzle game
									inspired by Portal and Antichamber, made in
									Unity. It was created in 6 days for a game
									jam, in which it placed 2nd out of ~80
									entries.
								</p>
							</Project>

							<Project
								title="Path of Redemption"
								image={porImage}
								links={[
									{
										tooltip: "Ludum Dare Entry",
										href:
											"https://ldjam.com/events/ludum-dare/44/path-of-redemption",
										icon: (
											<RiGamepadLine
												size={20}
												color="#ffffff"
											/>
										),
									},
									{
										tooltip: "itch.io",
										href:
											"https://windmillgames.itch.io/path-of-redemption",
										icon: <FaItchIo size={20} />,
									},
								]}
							>
								<p>
									<b>Path of Redemption</b> is a 2D game made
									in Love2D, similar to Binding of Isaac. It
									placed 7th out of over 3,000 entries in
									Ludum Dare 44.
								</p>
							</Project>
							<Project
								title="International Ace Station"
								links={[
									{
										tooltip: "GitHub",
										href:
											"https://github.com/tmello01/InternationalAceStation",
										icon: <AiOutlineGithub size={20} />,
									},
								]}
							>
								<p>
									A LAN-based card-game/tabletop sandbox for
									NASA's HUNCH program, along with some
									friends. If I'm not being lied to, they sent
									a copy of this to the space station!
								</p>
							</Project>
						</div>
					</section>
					<section>
						<h1>Skills and Proficiencies</h1>
						<p>
							Things I'd consider myself very knowledgable of
							include:
						</p>
						<ul>
							<li>ReactJS</li>
							<li>TypeScript / JavaScript</li>
							<li>
								Lua (primarily for{" "}
								<a
									href="https://love2d.org"
									rel="noopener noreferrer"
								>
									Love2D
								</a>
								)
							</li>
						</ul>
						<br />
						<p>Things I'd consider myself proficient in include:</p>
						<ul>
							<li>C# (Unity3D)</li>
							<li>Java (typically with Maven)</li>
							<li>C/C++</li>
						</ul>
						<br />
						<p>Some other things I've worked with:</p>
						<ul>
							<li>Google Cloud Platform / Firebase</li>
							<li>Google Kubernetes Engine</li>
							<li>Amazon Web Services</li>
							<li>Apache NiFi</li>
						</ul>
					</section>
					<section>
						<h1>Contact</h1>
						<p>
							If you'd like to contact me, shoot me an email:{" "}
							<a href="mailto:me@ebernerd.com">
								<span className="email">me@ebernerd.com</span>
							</a>
						</p>
						<p>
							You can also add me on Discord: <b>ebernerd#3814</b>
						</p>
					</section>
				</div>
			</div>
		</>
	)
}
