
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`


Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput), 2);
});

Deno.test("star_2", () => {
    assertEquals(star_2(sampleInput), 4);
});
