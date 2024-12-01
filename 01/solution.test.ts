
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`


Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput), 11);
});

Deno.test("star_2", () => {
    assertEquals(star_2(sampleInput), 31);
});
