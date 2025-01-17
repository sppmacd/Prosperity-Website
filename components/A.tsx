import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/router";

export interface AProps
	extends LinkProps,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	children?: React.ReactNode;
	activeClassName?: string;
	activeLooseMatch?: boolean;
	noIcon?: boolean;
}

/** Wrapper of the `next/link` element with additional UI functionality.  */
export default function A(props: AProps) {
	const { asPath, isReady } = useRouter();
	const isExternal = props.href.toString().startsWith("http");
	const [computedClassName, setComputedClassName] = useState(props.className);

	useEffect(() => {
		if (!isReady || isExternal) {
			return;
		}

		const path = new URL((props.as || props.href) as string, location.href).pathname;
		const activePath = new URL(asPath, location.href).pathname;

		if ((props.activeLooseMatch && activePath.includes(path)) || path == activePath) {
			setComputedClassName(`${props.className} ${props.activeClassName}`.trim());
		} else {
			setComputedClassName(`${props.className}`);
		}
	});

	return (
		<Link
			{...props}
			className={computedClassName}
			target={isExternal ? "_blank" : ""}
			referrerPolicy="no-referrer">
			{props.children}
			{isExternal && !props.noIcon ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="w-5 h-5 inline-block align-middle">
					<path
						fillRule="evenodd"
						d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
						clipRule="evenodd"
					/>
				</svg>
			) : (
				<></>
			)}
		</Link>
	);
}
