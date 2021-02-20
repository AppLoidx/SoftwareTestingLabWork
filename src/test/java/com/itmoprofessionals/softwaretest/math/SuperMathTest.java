package com.itmoprofessionals.softwaretest.math;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SuperMathTest {

    private final double sinDelta = 0.001;

    @Test
    void sin_zeroTest() {
        assertEquals(0, SuperMath.sin(0));
    }

    @Test
    void sin_zeroSignedTest() {
        assertEquals(-0, SuperMath.sin(-0));    // should have the same sign
    }


    @Test
    void sin_NaNTest() {
        assertEquals(Double.NaN, SuperMath.sin(Double.NaN));
    }

    @Test
    void sin_InfTest() {
        assertEquals(Double.NaN, SuperMath.sin(Double.NEGATIVE_INFINITY));
        assertEquals(Double.NaN, SuperMath.sin(Double.POSITIVE_INFINITY));
    }



    @Test
    void sin_sampleTestHalfPI() {
        assertEquals(1, SuperMath.sin(Math.PI / 2), sinDelta);
    }

    @Test
    void sin_sampleTestPI() {
        assertEquals(0, SuperMath.sin(Math.PI), sinDelta);
    }

    // TODO: write more sin test


    // Zero one infinity rule

    @Test
    void factorial_zeroTest() {
        // keep it simple
        final int expectedResult = 1;
        assertEquals(expectedResult, SuperMath.factorial(0));
    }

    @Test
    void factorial_oneTest() {
        // keep it simple
        final int expectedResult = 1;
        assertEquals(expectedResult, SuperMath.factorial(1));
    }

    @Test
    void factorial() {
        assertForFactorialResultForN(2, 2);
        assertForFactorialResultForN(3, 6);
        assertForFactorialResultForN(4, 24);
        assertForFactorialResultForN(5, 120);
        assertForFactorialResultForN(6, 720);
    }

    @Test
    void factorial_sequenceTest() {

        int currentValue = 1;
        int currentExpectedValue = 1;

        for (int i = 1; i < 10; i++) {
            assertEquals(currentExpectedValue, currentValue);
            currentValue = SuperMath.factorial(i);
            currentExpectedValue = currentExpectedValue * i;
        }
    }

    @Test
    void factorial_overflow() {
        assertThrows(ArithmeticException.class, () -> SuperMath.factorial(Integer.MAX_VALUE));
    }

    @Test
    void factorial_lessThanZero() {
        assertThrows(IllegalArgumentException.class, () -> SuperMath.factorial(-1));
    }

    private void assertForFactorialResultForN(int n, int expectedValue) {
        assertEquals(expectedValue, SuperMath.factorial(n));
    }

}