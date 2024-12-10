export const readInput = async (fileName: string): Promise<string> => {
    try {
        const data = await Deno.readTextFile(fileName);
        return data;
    } catch (error) {
        throw new Error(`Error reading data: ${error}`);
    }
}