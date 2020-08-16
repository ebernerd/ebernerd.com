import "./SocialLinks.scss"
import React from "react"
import { Tooltip } from "react-tippy"
import "react-tippy/dist/tippy.css"

import {
	AiOutlineTwitter,
	AiOutlineGithub,
	AiOutlineLinkedin,
} from "react-icons/ai"
import { FaItchIo } from "react-icons/fa"

interface SocialLinkProps {
	icon: JSX.Element
	href: string
	tooltip: string
}
const SocialLink = (props: SocialLinkProps) => (
	<Tooltip title={props.tooltip}>
		<a href={props.href} rel="noopener noreferrer" target="_blank">
			<div className="social-link">
				<div>{props.icon}</div>
			</div>
		</a>
	</Tooltip>
)

const iconSize = 26

export const SocialLinks = () => (
	<div className="social-links">
		<SocialLink
			icon={<AiOutlineGithub size={iconSize} />}
			tooltip="Github"
			href="https://github.com/ebernerd"
		/>
		<SocialLink
			icon={<FaItchIo size={iconSize} />}
			tooltip="itch.io"
			href="https://ebernerd.itch.io/"
		/>
		<SocialLink
			icon={<AiOutlineTwitter size={iconSize} />}
			tooltip="Twitter"
			href="https://twitter.com/ebernerd"
		/>
		<SocialLink
			icon={<AiOutlineLinkedin size={iconSize} />}
			tooltip="LinkedIn"
			href="https://linkedin.com/in/ebernerd"
		/>
	</div>
)
