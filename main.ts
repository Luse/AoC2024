import { fetchAndReturnInput } from "./fetch.ts";

const folderName = Deno.args[0];

async function createFolderAndRunDenoInit() {
    try {
        const folderExists = await Deno.stat(folderName).then(() => true).catch(() => false);

        if (!folderExists) {
            await Deno.mkdir(folderName);
            const templateFolder = "template";
            for await (const entry of Deno.readDir(templateFolder)) {
              const srcPath = `${templateFolder}/${entry.name}`;
              const destPath = `${folderName}/${entry.name}`;
              if (entry.isDirectory) {
                await Deno.mkdir(destPath, { recursive: true });
              } else if (entry.isFile) {
                await Deno.copyFile(srcPath, destPath);
              }
            }
            console.log(`Created folder: ${folderName}`);
            await fetchAndReturnInput(folderName);
        }

    } catch (error) {
        console.error(error);
    }
}

createFolderAndRunDenoInit();