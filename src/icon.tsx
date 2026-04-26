import { Component, leak, SVG, XMLNS } from "rvx";

export function createIcon(variant: string, name: string, Template: Component<void, SVGSVGElement>): Component<void | {}, SVGSVGElement> {
	let template: SVGSVGElement | undefined;
	return () => {
		if (template === undefined) {
			template = XMLNS.provide(SVG, () => leak(Template));
			template.classList.add("iconoir", "iconoir-" + variant, "iconoir-" + name);
		}
		return template.cloneNode(true) as SVGSVGElement;
	};
}
