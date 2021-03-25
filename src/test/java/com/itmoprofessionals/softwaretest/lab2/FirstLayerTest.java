package com.itmoprofessionals.softwaretest.lab2;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class FirstLayerTest {
    final static double EPSILON = 1E-10;
    final static double PERIOD = 2*Math.PI;
    final static double PRECISION = 0.001;
    static SystemOfEquations systemMock;

    @BeforeAll
    static void createMock(){
        systemMock = Mockito.mock(SystemOfEquations.class, Mockito.CALLS_REAL_METHODS);
        when(systemMock.system(0)).thenReturn(Double.NaN);
        when(systemMock.system(0 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(0 + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(0 - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.system(-1.288)).thenReturn(25.8);
        when(systemMock.system(-1.288 - PERIOD)).thenReturn(25.8);

        when(systemMock.system(-1.425)).thenReturn(21.496);
        when(systemMock.system(-1.425 - PERIOD)).thenReturn(21.496);

        when(systemMock.system(-1.5)).thenReturn(25.58);
        when(systemMock.system(-1.5 - PERIOD)).thenReturn(25.58);

        when(systemMock.system(-Math.PI/2 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(-Math.PI/2 + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(-Math.PI/2)).thenReturn(Double.NaN);
        when(systemMock.system(-Math.PI/2 - PERIOD)).thenReturn(Double.NaN);

        when(systemMock.system(-Math.PI/2 - EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.system(-Math.PI/2 - EPSILON - PERIOD)).thenReturn(Double.NEGATIVE_INFINITY);

        when(systemMock.system(-1.67)).thenReturn(-3.723);
        when(systemMock.system(-1.67 - PERIOD)).thenReturn(-3.723);

        when(systemMock.system(-1.9)).thenReturn(-0.0316);
        when(systemMock.system(-1.9 - PERIOD)).thenReturn(-0.0316);

        when(systemMock.system(-2)).thenReturn(-0.0017);
        when(systemMock.system(-2 - PERIOD)).thenReturn(-0.0017);

        when(systemMock.system(-2.237)).thenReturn(0.0);
        when(systemMock.system(-2.237 - PERIOD)).thenReturn(0.0);

        when(systemMock.system(-2.428)).thenReturn(0.0017);
        when(systemMock.system(-2.428 - PERIOD)).thenReturn(0.0017);

        when(systemMock.system(-2.4893)).thenReturn(0.0317);
        when(systemMock.system(-2.4893 - PERIOD)).thenReturn(0.0317);

        when(systemMock.system(-2.6175)).thenReturn(3.715);
        when(systemMock.system(-2.6175 - PERIOD)).thenReturn(3.715);

        when(systemMock.system(-2.6175)).thenReturn(3.715);
        when(systemMock.system(-2.6175 - PERIOD)).thenReturn(3.715);

        when(systemMock.system(-Math.PI)).thenReturn(Double.NaN);
        when(systemMock.system(-Math.PI + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(-Math.PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.system(-Math.PI - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.system(-3.665)).thenReturn(3.801);
        when(systemMock.system(-3.665 - PERIOD)).thenReturn(3.801);

        when(systemMock.system(-3.8)).thenReturn(0.0243);
        when(systemMock.system(-3.8 - PERIOD)).thenReturn(0.0243);

        when(systemMock.system(-4.046)).thenReturn(0.0);
        when(systemMock.system(-4.046 - PERIOD)).thenReturn(0.0);

        when(systemMock.system(-4.4)).thenReturn(-0.0475);
        when(systemMock.system(-4.4 - PERIOD)).thenReturn(-0.0475);

        when(systemMock.system(-4.615)).thenReturn(-3.87);
        when(systemMock.system(-4.615 - PERIOD)).thenReturn(-3.87);

        when(systemMock.system(-1.5 * Math.PI/2 + EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.system(-1.5 * Math.PI/2 + EPSILON - PERIOD)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.system(-1.5 * Math.PI/2)).thenReturn(Double.NaN);
        when(systemMock.system(-1.5 * Math.PI/2 - PERIOD)).thenReturn(Double.NaN);

        when(systemMock.system(-1.5 * Math.PI/2 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(-1.5 * Math.PI/2 - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.system(-4.783)).thenReturn(25.61);
        when(systemMock.system(-4.783 - PERIOD)).thenReturn(25.61);

        when(systemMock.system(-4.859)).thenReturn(21.496);
        when(systemMock.system(-4.859 - PERIOD)).thenReturn(21.496);

        when(systemMock.system(-4.991)).thenReturn(25.579);
        when(systemMock.system(-4.991 - PERIOD)).thenReturn(25.579);

        when(systemMock.system(-2*Math.PI + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(-2*Math.PI + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        /////////////////////////////// todo xpath locator

        when(systemMock.system(0 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.system(0.05)).thenReturn(0.00416);
        when(systemMock.system(0.0065)).thenReturn(0.0379);
        when(systemMock.system(0.02)).thenReturn(0.01306);
        when(systemMock.system(5)).thenReturn(0.001);
        when(systemMock.system(Double.POSITIVE_INFINITY)).thenReturn(0 + EPSILON);

    }
    @Test
    void testRightEndpointF1(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(0.0 - EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = 0-)"
        );
    }

    @Test
    void testRightEndpointF1WithPeriod(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(0.0 - EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = (0-) - PERIOD)"
        );
    }
    @Test
    void testRightEndpointF1WithEpsAndPeriod(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(0.0 + EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = (0-) + EPSILON - PERIOD)"
        );
    }

    @Test
    void test1F1(){
        assertEquals(
                25.8,
                systemMock.system(-1.288),
                PRECISION,
                "Layer 1: [F1] (х = -1.288)"
        );
    }
    @Test
    void test1F1Period(){
        assertEquals(
                25.8,
                systemMock.system(-1.288 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.288 - PERIOD)"
        );
    }

    @Test
    void test2F1(){
        assertEquals(
                21.496,
                systemMock.system(-1.425),
                PRECISION,
                "Layer 1: [F1] (х = -1.425)"
        );
    }
    @Test
    void test2F1Period(){
        assertEquals(
                21.496,
                systemMock.system(-1.425 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.425 - PERIOD)"
        );
    }

    @Test
    void test3F1(){
        assertEquals(
                25.58,
                systemMock.system(-1.5),
                PRECISION,
                "Layer 1: [F1] (х = -1.5)"
        );
    }

    @Test
    void test3F1Period(){
        assertEquals(
                25.58,
                systemMock.system(-1.5 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 - PERIOD)"
        );
    }

    @Test
    void testPlusHalfPiEpsilonF1(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-Math.PI/2 + EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2 + EPSILON)"
        );
    }

    @Test
    void testPlusHalfPiEpsilonF1Period(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-Math.PI/2 + EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2 + EPSILON - PERIOD)"
        );
    }

    @Test
    void testMinusHalfPiF1(){
        assertEquals(
                Double.NaN,
                systemMock.system(-Math.PI/2),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2)"
        );
    }

    @Test
    void testMinusHalfPiF1Period(){
        assertEquals(
                Double.NaN,
                systemMock.system(-Math.PI/2 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2 - PERIOD)"
        );
    }

    @Test
    void testMinusHalfPiEpsilonF1(){
        assertEquals(
                Double.NEGATIVE_INFINITY,
                systemMock.system(-Math.PI/2 - EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2 - EPSILON)"
        );
    }

    @Test
    void testMinusHalfPiEpsilonF1Period(){
        assertEquals(
                Double.NEGATIVE_INFINITY,
                systemMock.system(-Math.PI/2 - EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI/2 - EPSILON - PERIOD)"
        );
    }

    @Test
    void test4F1(){
        assertEquals(
                -3.723,
                systemMock.system(-1.67),
                PRECISION,
                "Layer 1: [F1] (х = -1.67)"
        );
    }

    @Test
    void test4F1Period(){
        assertEquals(
                -3.723,
                systemMock.system(-1.67 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.67 - PERIOD)"
        );
    }

    @Test
    void test5F1(){
        assertEquals(
                -0.0316,
                systemMock.system(-1.9),
                PRECISION,
                "Layer 1: [F1] (х = -1.9)"
        );
    }

    @Test
    void test5F1Period(){
        assertEquals(
                -0.0316,
                systemMock.system(-1.9 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.9 - PERIOD)"
        );
    }

    @Test
    void test6F1(){
        assertEquals(
                -0.0017,
                systemMock.system(-2),
                PRECISION,
                "Layer 1: [F1] (х = -2)"
        );
    }

    @Test
    void test6F1Period(){
        assertEquals(
                -0.0017,
                systemMock.system(-2 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2 - PERIOD)"
        );
    }

    @Test
    void test7F1(){
        assertEquals(
                0.0,
                systemMock.system(-2.237),
                PRECISION,
                "Layer 1: [F1] (х = -2.237)"
        );
    }

    @Test
    void test7F1Period(){
        assertEquals(
                0.0,
                systemMock.system(-2.237 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2.237 - PERIOD)"
        );
    }

    @Test
    void test8F1(){
        assertEquals(
                0.0017,
                systemMock.system(-2.428),
                PRECISION,
                "Layer 1: [F1] (х = -2.428)"
        );
    }

    @Test
    void test8F1Period(){
        assertEquals(
                0.0017,
                systemMock.system(-2.428 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2.428 - PERIOD)"
        );
    }

    @Test
    void test9F1(){
        assertEquals(
                0.0317,
                systemMock.system(-2.4893),
                PRECISION,
                "Layer 1: [F1] (х = -2.4893)"
        );
    }

    @Test
    void test9F1Period(){
        assertEquals(
                0.0317,
                systemMock.system(-2.4893 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2.4893 - PERIOD)"
        );
    }

    @Test
    void testMinusPiF1(){
        assertEquals(
                Double.NaN,
                systemMock.system(-Math.PI),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI)"
        );
    }

    @Test
    void testMinusPiF1Period(){
        assertEquals(
                Double.NaN,
                systemMock.system(-Math.PI - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI - PERIOD)"
        );
    }

    @Test
    void testMinusPiEpsilonF1(){
        assertEquals(
                Double.NaN,
                systemMock.system(-Math.PI - EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI - EPSILON)"
        );
    }

    @Test
    void testMinusPiEpsilonF1Period(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-Math.PI - EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -Math.PI - EPSILON - PERIOD)"
        );
    }

    @Test
    void test10F1(){
        assertEquals(
                3.715,
                systemMock.system(-2.6175),
                PRECISION,
                "Layer 1: [F1] (х = -2.6175)"
        );
    }

    @Test
    void test10F1Period(){
        assertEquals(
                3.715,
                systemMock.system(-2.6175 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2.6175 - PERIOD)"
        );
    }

    @Test
    void test11F1(){
        assertEquals(
                3.715,
                systemMock.system(-2.6175),
                PRECISION,
                "Layer 1: [F1] (х = -2.6175)"
        );
    }

    @Test
    void test11F1Period(){
        assertEquals(
                3.715,
                systemMock.system(-2.6175 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2.6175 - PERIOD)"
        );
    }

    @Test
    void test12F1(){
        assertEquals(
                3.801,
                systemMock.system(-3.665),
                PRECISION,
                "Layer 1: [F1] (х = -3.665)"
        );
    }

    @Test
    void test12F1Period(){
        assertEquals(
                3.801,
                systemMock.system(-3.665 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -3.665 - PERIOD)"
        );
    }

    @Test
    void test13F1(){
        assertEquals(
                0.0243,
                systemMock.system(-3.8),
                PRECISION,
                "Layer 1: [F1] (х = -3.8)"
        );
    }

    @Test
    void test13F1Period(){
        assertEquals(
                0.0243,
                systemMock.system(-3.8 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -3.8 - PERIOD)"
        );
    }

    @Test
    void test14F1(){
        assertEquals(
                0.0,
                systemMock.system(-4.046),
                PRECISION,
                "Layer 1: [F1] (х = -4.046)"
        );
    }

    @Test
    void test14F1Period(){
        assertEquals(
                0.0,
                systemMock.system(-4.046 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.046 - PERIOD)"
        );
    }

    @Test
    void test15F1(){
        assertEquals(
                -0.0475,
                systemMock.system(-4.4),
                PRECISION,
                "Layer 1: [F1] (х = -4.4)"
        );
    }

    @Test
    void test15F1Period(){
        assertEquals(
                -0.0475,
                systemMock.system(-4.4 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.4 - PERIOD)"
        );
    }

    @Test
    void test16F1(){
        assertEquals(
                -3.87,
                systemMock.system(-4.615),
                PRECISION,
                "Layer 1: [F1] (х = -4.615)"
        );
    }

    @Test
    void test16F1Period(){
        assertEquals(
                -3.87,
                systemMock.system(-4.615 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.615 - PERIOD)"
        );
    }

    @Test
    void testMinusOneAndHalfPiF1(){
        assertEquals(
                Double.NaN,
                systemMock.system(-1.5 * Math.PI/2),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2)"
        );
    }

    @Test
    void testMinusOneAndHalfPiF1Period(){
        assertEquals(
                Double.NaN,
                systemMock.system(-1.5 * Math.PI/2 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2 - PERIOD)"
        );
    }

    @Test
    void testMinusOneAndHalfPiEpsilonF1(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-1.5 * Math.PI/2 - EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2 - EPSILON)"
        );
    }

    @Test
    void testMinusOneAndHalfPiEpsilonF1Period(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-1.5 * Math.PI/2 - EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2 - EPSILON - PERIOD)"
        );
    }

    @Test
    void testMinusOneAndHalfPiDivTwoF1(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-1.5 * Math.PI/2 - EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2 - EPSILON)"
        );
    }

    @Test
    void testMinusOneAndHalfPiDivTwoF1Period(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-1.5 * Math.PI/2 - EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -1.5 * Math.PI/2 - EPSILON - PERIOD)"
        );
    }

    @Test
    void test17F1(){
        assertEquals(
                25.61,
                systemMock.system(-4.783),
                PRECISION,
                "Layer 1: [F1] (х = -4.783)"
        );
    }

    @Test
    void test17F1Period(){
        assertEquals(
                25.61,
                systemMock.system(-4.783 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.783 - PERIOD)"
        );
    }

    @Test
    void test18F1(){
        assertEquals(
                21.496,
                systemMock.system(-4.859),
                PRECISION,
                "Layer 1: [F1] (х = -4.859)"
        );
    }

    @Test
    void test18F1Period(){
        assertEquals(
                21.496,
                systemMock.system(-4.859 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.859 - PERIOD)"
        );
    }

    @Test
    void test19F1(){
        assertEquals(
                25.579,
                systemMock.system(-4.991),
                PRECISION,
                "Layer 1: [F1] (х = -4.991)"
        );
    }

    @Test
    void test19F1Period(){
        assertEquals(
                25.579,
                systemMock.system(-4.991 - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -4.991 - PERIOD)"
        );
    }

    @Test
    void testMinusTwoF1(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-2*Math.PI + EPSILON),
                PRECISION,
                "Layer 1: [F1] (х = -2*Math.PI + EPSILON)"
        );
    }

    @Test
    void testMinusTwoF1Period(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(-2*Math.PI + EPSILON - PERIOD),
                PRECISION,
                "Layer 1: [F1] (х = -2*Math.PI + EPSILON - PERIOD)"
        );
    }

    //Middle point

    @Test
    void testZero(){
        assertEquals(
                Double.NaN,
                systemMock.system(0.0),
                PRECISION,
                "Layer 1: [] (х = (0))"
        );
    }

    // Second function
    @Test
    void testLeftEndpointF2(){
        assertEquals(
                Double.POSITIVE_INFINITY,
                systemMock.system(0.0 + EPSILON),
                PRECISION,
                "Layer 1: [F2] (х = 0+)"
        );
    }

    @Test
    void testRightBoundF2(){
        assertEquals(
                0 + EPSILON,
                systemMock.system(Double.POSITIVE_INFINITY),
                PRECISION,
                "Layer 1: [F2] (х = +inf)"
        );
    }

    @Test
    void testFirstF2(){
        assertEquals(
                0.00416,
                systemMock.system(0.05),
                PRECISION,
                "Layer 1: [F2] (х = 0.05)"
        );
    }
    @Test
    void testSecondF2(){
        assertEquals(
                0.0379,
                systemMock.system(0.0065),
                PRECISION,
                "Layer 1: [F2] (х = 0.0065)"
        );
    }
    @Test
    void testThirdF2(){
        assertEquals(
                0.01306,
                systemMock.system(0.02),
                PRECISION,
                "Layer 1: [F2] (х = 0.02)"
        );
    }
    @Test
    void testFourthF2(){
        assertEquals(
                0.001,
                systemMock.system(5),
                PRECISION,
                "Layer 1: [F2] (х = 5)"
        );
    }
}

