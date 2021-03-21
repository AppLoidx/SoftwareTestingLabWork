package com.itmoprofessionals.softwaretest.lab2;

import org.junit.jupiter.api.BeforeAll;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;

public class FirstLayerTest {
    final static double EPSILON = 1E-10;
    final static double PERIOD = 2*Math.PI;
    final static double PRECISION = 0.001;
    SystemOfEquations systemMock;

    @BeforeAll
    void createMock (){
        systemMock = Mockito.mock(SystemOfEquations.class, Mockito.CALLS_REAL_METHODS);
        when(systemMock.y1(0)).thenReturn(Double.NaN);
        when(systemMock.y1(0 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(0 + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(0 - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.y1(-1.288)).thenReturn(25.8);
        when(systemMock.y1(-1.288 - PERIOD)).thenReturn(25.8);

        when(systemMock.y1(-1.425)).thenReturn(21.496);
        when(systemMock.y1(-1.425 - PERIOD)).thenReturn(21.496);

        when(systemMock.y1(-1.5)).thenReturn(25.58);
        when(systemMock.y1(-1.5 - PERIOD)).thenReturn(25.58);

        when(systemMock.y1(-Math.PI/2 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(-Math.PI/2 + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(-Math.PI/2)).thenReturn(Double.NaN);
        when(systemMock.y1(-Math.PI/2 - PERIOD)).thenReturn(Double.NaN);

        when(systemMock.y1(-Math.PI/2 - EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.y1(-Math.PI/2 - EPSILON - PERIOD)).thenReturn(Double.NEGATIVE_INFINITY);

        when(systemMock.y1(-1.67)).thenReturn(-3.723);
        when(systemMock.y1(-1.67 - PERIOD)).thenReturn(-3.723);

        when(systemMock.y1(-1.9)).thenReturn(-0.0316);
        when(systemMock.y1(-1.9 - PERIOD)).thenReturn(-0.0316);

        when(systemMock.y1(-2)).thenReturn(-0.0017);
        when(systemMock.y1(-2 - PERIOD)).thenReturn(-0.0017);

        when(systemMock.y1(-2.237)).thenReturn(0.0);
        when(systemMock.y1(-2.237 - PERIOD)).thenReturn(0.0);

        when(systemMock.y1(-2.428)).thenReturn(0.0017);
        when(systemMock.y1(-2.428 - PERIOD)).thenReturn(0.0017);

        when(systemMock.y1(-2.4893)).thenReturn(0.0317);
        when(systemMock.y1(-2.4893 - PERIOD)).thenReturn(0.0017);

        when(systemMock.y1(-2.6175)).thenReturn(3.715);
        when(systemMock.y1(-2.6175 - PERIOD)).thenReturn(3.715);

        when(systemMock.y1(-2.6175)).thenReturn(3.715);
        when(systemMock.y1(-2.6175 - PERIOD)).thenReturn(3.715);

        when(systemMock.y1(-Math.PI)).thenReturn(Double.NaN);
        when(systemMock.y1(-Math.PI + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(-Math.PI - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.y1(-Math.PI - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.y1(-3.665)).thenReturn(3.801);
        when(systemMock.y1(-3.665 - PERIOD)).thenReturn(3.801);

        when(systemMock.y1(-3.8)).thenReturn(0.0243);
        when(systemMock.y1(-3.8 - PERIOD)).thenReturn(0.0243);

        when(systemMock.y1(-4.046)).thenReturn(0.0);
        when(systemMock.y1(-4.046 - PERIOD)).thenReturn(0.0);

        when(systemMock.y1(-4.4)).thenReturn(-0.0475);
        when(systemMock.y1(-4.4 - PERIOD)).thenReturn(-0.0475);

        when(systemMock.y1(-4.615)).thenReturn(-3.87);
        when(systemMock.y1(-4.615 - PERIOD)).thenReturn(-3.87);

        when(systemMock.y1(-1.5 * Math.PI/2 + EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.y1(-1.5 * Math.PI/2 + EPSILON - PERIOD)).thenReturn(Double.NEGATIVE_INFINITY);
        when(systemMock.y1(-1.5 * Math.PI/2)).thenReturn(Double.NaN);
        when(systemMock.y1(-1.5 * Math.PI/2 - PERIOD)).thenReturn(Double.NaN);

        when(systemMock.y1(-1.5 * Math.PI/2 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(-1.5 * Math.PI/2 - EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        when(systemMock.y1(-4.783)).thenReturn(25.61);
        when(systemMock.y1(-4.783 - PERIOD)).thenReturn(25.61);

        when(systemMock.y1(-4.859)).thenReturn(21.496);
        when(systemMock.y1(-4.859 - PERIOD)).thenReturn(21.496);

        when(systemMock.y1(-4.991)).thenReturn(25.579);
        when(systemMock.y1(-4.991 - PERIOD)).thenReturn(25.579);

        when(systemMock.y1(-2*Math.PI + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y1(-2*Math.PI + EPSILON - PERIOD)).thenReturn(Double.POSITIVE_INFINITY);

        ///////////////////////////////

        when(systemMock.y2(0 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.y2(0.05)).thenReturn(0.00416);
        when(systemMock.y2(0.0065)).thenReturn(0.0379);
        when(systemMock.y2(0.02)).thenReturn(0.01306);
        when(systemMock.y2(5)).thenReturn(0.001);
        when(systemMock.y2(Double.POSITIVE_INFINITY)).thenReturn(0 + EPSILON);


    }
}

