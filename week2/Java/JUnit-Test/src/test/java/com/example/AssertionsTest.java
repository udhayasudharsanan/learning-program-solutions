package com.example;

import static org.junit.Assert.*;
import org.junit.*;

public class AssertionsTest {

    @Before
    public void setUp() {
        System.out.println("Setup...");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown...");
    }

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        assertTrue(5 > 3);
        assertFalse(5 < 3);
        assertNull(null);
        assertNotNull(new Object());
    }
}
