import { assertEquals } from "@std/assert/equals";
import { assertThrows } from "@std/assert/throws";
import { removeLeadingZero } from "./fetch.ts";


Deno.test('removeLeadingZero', () => {
    assertEquals(removeLeadingZero('01'), '1');
    assertEquals(removeLeadingZero('001'), '1');
    assertEquals(removeLeadingZero('000'), '');
    assertEquals(removeLeadingZero('02'), '2');
    assertEquals(removeLeadingZero('10'), '10');
    assertEquals(removeLeadingZero(''), '');
    assertEquals(removeLeadingZero('0'), '');
    assertThrows(() => removeLeadingZero(null!))
    assertThrows(() => removeLeadingZero(undefined));
});