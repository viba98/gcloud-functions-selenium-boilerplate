import { Request, Response } from "express"
import { withBrowser } from "./browser"

/**
 * The name of this export must match the `--entry-point` option in
 * the deploy script.
 */
export default async function main(req: Request, res: Response) {
	console.log("1st test")
	await withBrowser(async browser => {
		console.log("2nd test")
		await browser.visit("https://vectormagic.com/")
		console.log("3rd test")
		// Wait for the product page to load.
		await browser.findText("Easily Convert")
		console.log("4")
		const source = await browser.driver.getPageSource()
		console.log("5")
		res.status(200).send(source)
		console.log("6")
		// const fileName = `/tmp/screenshot-${Date.now()}.png`
		// await browser.saveScreenshotPng(fileName)
	})
	console.log("7")
}
