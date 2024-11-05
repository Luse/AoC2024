
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `
1-3 a: 
abcde
foo
`


Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput), "test");
});

Deno.test("star_2", () => {
    assertEquals(star_2(sampleInput), "test");
});
