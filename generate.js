import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(import.meta.url), "..");
const input = join(root, "node_modules/iconoir/icons");
const output = join(root, "src/icons");

await mkdir(output, { recursive: true });

for (const variant of ["regular", "solid"]) {
	const variantDir = join(input, variant);
	const tsx = [`import { createIcon } from "../icon.js";`];
	for (const file of (await readdir(variantDir)).sort()) {
		if (file.endsWith(".svg")) {
			const moduleName = file.slice(0, -4);
			const componentName = moduleName.replace(/(?:^|-)(.)/g, (_, c) => c.toUpperCase());

			let svg = await readFile(join(variantDir, file), "utf-8");
			svg = svg.replace(/\n/g, "");

			tsx.push("");
			tsx.push(`export const ${componentName} = /* @__PURE__ */ createIcon("", "", () => ${svg} as SVGSVGElement);`);
		}
	}
	await writeFile(join(output, variant + ".tsx"), tsx.join("\n") + "\n");
}
