
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`


Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput),3749);
});

Deno.test({
    name: "star_2",
    ignore: true,
    fn: () => {
        assertEquals(star_2(sampleInput), 1);
    }
});
