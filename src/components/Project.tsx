import "./Project.scss"
import React from "react"

import { Tooltip } from "react-tippy"
import "react-tippy/dist/tippy.css"

interface Props {
	image?: string
	title: string
	children?: React.ReactNode
	links?: { tooltip: string; href: string; icon: JSX.Element }[]
}

export const Project = (props: Props) => (
	<div className="project">
		{console.log(props)}
		<header
			style={{
				backgroundImage: props.image
					? `url(${props.image})`
					: undefined,
			}}
		>
			<div>
				<h1>{props.title}</h1>
			</div>
		</header>
		<div className="content">{props.children}</div>
		<div className="links">
			{props.links?.map((link) => (
				<Tooltip title={link.tooltip}>
					<a
						href={link.href}
						rel="noopener noreferrer"
						target="_blank"
					>
						<div className="link">{link.icon}</div>
					</a>
				</Tooltip>
			))}
		</div>
	</div>
)
