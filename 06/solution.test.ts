
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`


Deno.test("star_1", async () => {
    assertEquals(await star_1(sampleInput), 41);
});

Deno.test("star_2", async () => {
    assertEquals(await star_2(sampleInput), 1);
});
