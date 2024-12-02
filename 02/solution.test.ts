
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
79 79 81 84 82 85 88
13 10 9 7 5
90 92 92 93 94
91 90 88 89
63 60 62 65 67 69
26 24 26 29 30 31 33 34
27 26 19 16 13 10 3
43 41 43 45 46 49
21 24 23 21 20 19 18`


Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput), 3);
});

Deno.test("star_2", () => {
    assertEquals(star_2(sampleInput), 7);
});
