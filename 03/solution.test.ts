
import { assertEquals } from "@std/assert";
import { star_1, star_2 } from "./solution.ts";


const sampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
const sampleInput2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

Deno.test("star_1", () => {
    assertEquals(star_1(sampleInput), 161);
});

Deno.test("star_2", () => {
    assertEquals(star_2(sampleInput2), 48);
});
