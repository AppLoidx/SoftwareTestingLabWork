package com.itmoprofessionals.softwaretest.lab2;

import org.junit.jupiter.api.Test;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class FifthLayerTest {
    final static double EPSILON = 1E-10;
    final static double PERIOD = 2* PI;
    final static double PRECISION = 0.1;
    static SystemOfEquations systemMock = new SystemOfEquations();


    @Test
    void testZeroValue() {
        assertEquals(
                Double.NaN,
                systemMock.system(0.0),
                PRECISION,
                "Layer 2: F1[х = 0]. Тестирование нулевого значения."
        );
    }


    @Test
    void testZeroValueFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(0.0 - PERIOD),
                PRECISION,
                "Layer 2: F1[х = 0 - PERIOD]. Тестирование нулевого значения со сдвигом в период"
        );
    }

    @Test
    void testZeroValueHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(0.0 - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = 0 - 100 * PERIOD]. Тестирование нулевого значения со сдвигом в 100 периодов"
        );
    }

    @Test
    void testBoundaryValueToTheLeftOfZero() {
        assertEquals(
                Double.NaN,
                systemMock.system(0 - EPSILON),
                PRECISION,
                "Layer 2: F1[х = 0-]. Тестирование граничного значения слева от нуля."
        );
    }

    @Test
    void testBoundaryValueToTheLeftOfZeroFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(0 - EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = 0 - EPSILON - PERIOD]. Тестирование граничного значения слева от нуля со сдвигом в период влево"
        );
    }

    @Test
    void testBoundaryValueToTheLeftOfZeroHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(0 - EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = 0 - EPSILON - 100 * PERIOD]. Тестирование граничного значения слева от нуля со сдвигом в сто периодов влево"
        );
    }

    @Test
    void test1F1(){
        assertEquals(
                25.804844892334565,
                systemMock.system(-1.288),
                PRECISION,
                "Layer 2: [F1] (х = -1.288)"
        );
    }
    @Test
    void test1F1Period(){
        assertEquals(
                25.8,
                systemMock.system(-1.288 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.288 - PERIOD)"
        );
    }
    @Test
    void test1F1100Period(){
        assertEquals(
                25.8,
                systemMock.system(-1.288 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.288 - 100 * PERIOD)"
        );
    }

    @Test
    void test2F1(){
        assertEquals(
                21.496,
                systemMock.system(-1.425),
                PRECISION,
                "Layer 2: [F1] (х = -1.425)"
        );
    }
    @Test
    void test2F1Period(){
        assertEquals(
                21.496,
                systemMock.system(-1.425 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.425 - PERIOD)"
        );
    }

    @Test
    void test2F1100Period(){
        assertEquals(
                21.496,
                systemMock.system(-1.425 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.425 - 100 * PERIOD)"
        );
    }

    @Test
    void test3F1(){
        assertEquals(
                25.351957326801482,
                systemMock.system(-1.5),
                PRECISION,
                "Layer 2: [F1] (х = -1.5)"
        );
    }

    @Test
    void test3F1Period(){
        assertEquals(
                25.351957326801482,
                systemMock.system(-1.5 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.5 - PERIOD)"
        );
    }

    @Test
    void test3F1100Period(){
        assertEquals(
                25.351957326805767,
                systemMock.system(-1.5 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.5 - 100 * PERIOD)"
        );
    }

    @Test
    void testIndefiniteValueInHalfPi() {
        assertEquals(
                -47.98792784572932,
                systemMock.system(-PI / 2),
                PRECISION,
                "Layer 2: F1[х = -PI / 2]. При неопределенном значении."
        );
    }

    @Test
    void testIndefiniteValueInHalfPiFirstPeriod() {
        assertEquals(
                -47.98792784572932,
                systemMock.system(-PI / 2 - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - PERIOD]. При неопределенном значении. Сдвиг на один период"
        );
    }

    @Test
    void testIndefiniteValueInHalfPiHundredthPeriod() {
        assertEquals(
                -47.987927845709486,
                systemMock.system(-PI / 2 - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - 100 * PERIOD]. При неопределенном значении. Сдвиг на сто периодов"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPi() {
        assertEquals(
                66.01805239778068,
                systemMock.system(-PI / 2 + EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS]. Граничное значение справа от -PI/2. x->-pi/2+"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPiFirstPeriod() {
        assertEquals(
                66.01805239778068,
                systemMock.system(-PI / 2 + EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS - PERIOD]. Граничное значение справа от PI/2. x->pi/2+. Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueToTheRightOfHalfPiHundredthPeriod() {
        assertEquals(
                66.01805239776093,
                systemMock.system(-PI / 2 + EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS - 100 * PERIOD]. Граничное значение справа от -PI/2. x->-pi/2+. Сдвиг на сто периодов"
        );
    }


    @Test
    void testBoundaryValueToTheLeftOfHalfPi() {
        assertEquals(
                -47.98792782977753,
                systemMock.system(-PI / 2 - EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - EPS]. Граничное значение справа от -PI/2. x->-pi/2-"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPiLeftPeriod() {
        assertEquals(
                -47.98792782977753,
                systemMock.system(-PI / 2 - EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - EPS - PERIOD]. Граничное значение справа от -PI/2. x->-pi/2-. Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueToTheLeftOfHalfPiHundredthPeriod() {
        assertEquals(
                -47.98792782977753,
                systemMock.system(-PI / 2 - EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - EPS - 100 * PERIOD]. Граничное значение справа от -PI/2. x->-pi/2-. Сдвиг на сто периодов"
        );
    }

    @Test
    void test4F1(){
        assertEquals(
                -2.017,
                systemMock.system(-1.7),
                PRECISION,
                "Layer 2: [F1] (х = -1.7)"
        );
    }

    @Test
    void test4F1Period(){
        assertEquals(
                -2.017,
                systemMock.system(-1.7 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.7 - PERIOD)"
        );
    }

    @Test
    void test4F1100Period(){
        assertEquals(
                -1.9216309305041126,
                systemMock.system(-1.7 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.7 - 100 * PERIOD)"
        );
    }
    @Test
    void test5F1(){
        assertEquals(
                0.0,
                systemMock.system(-2.237),
                PRECISION,
                "Layer 2: [F1] (х = -2.237)"
        );
    }

    @Test
    void test5F1Period(){
        assertEquals(
                0.0,
                systemMock.system(-2.237 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -2.237 - PERIOD)"
        );
    }

    @Test
    void test5F1100Period(){
        assertEquals(
                0.0,
                systemMock.system(-2.237 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -2.237 - 100 * PERIOD)"
        );
    }

    @Test
    void testTheBoundaryValueBetweenTheSecondAndThirdPartsAndTheVicinityOfThePIPoint() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI),
                PRECISION,
                "Layer 2: F1[х = -PI].  Граничное значение между второй и третьей частями и окрестности точки PI."
        );
    }

    @Test
    void testTheBoundaryValueBetweenTheSecondAndThirdPartsAndTheVicinityOfThePIPointFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI- PERIOD].  Граничное значение между второй и третьей частями и окрестности точки PI. Сдвиг на один период"
        );
    }

    @Test
    void testTheBoundaryValueBetweenTheSecondAndThirdPartsAndTheVicinityOfThePIPointPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI - 100 * PERIOD].  Граничное значение между второй и третьей частями и окрестности точки PI. Сдвиг на сто периодов"
        );
    }

    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheRightOfThePI() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI + EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI + EPS].  Граничное значение между второй и третьей частями и справа от  точки PI . x->-pi+"
        );
    }

    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheRightOfThePIPointFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI + EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI + EPS - PERIOD].  Граничное значение между второй и третьей частями и справа от  точки PI . Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheRightOfThePIHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI + EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI + EPS - 100 * PERIOD].  Граничное значение между второй и третьей частями и справа от  точки PI. Сдвиг на сто периодов"
        );
    }


    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheLeftOfThePI() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI - EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI - EPS].  Граничное значение между второй и третьей частями и слева от  точки PI  x->-pi-"
        );
    }

    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheLeftOfThePIFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI - EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI  - EPS - PERIOD].  Граничное значение между второй и третьей частями и слева от  точки PI. x->-pi-. Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueBetweenTheSecondAndThirdPartsAndToTheLeftOfThePIHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI - EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI - EPS - 100 * PERIOD].  Граничное значение между второй и третьей частями и слева от  точки PI. x->-pi-. Сдвиг на сто периодов"
        );
    }
    @Test
    void test6F1(){
        assertEquals(
                3.801,
                systemMock.system(-3.665),
                PRECISION,
                "Layer 2: [F1] (х = -3.665)"
        );
    }

    @Test
    void test6F1Period(){
        assertEquals(
                3.801,
                systemMock.system(-3.665 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -3.665 - PERIOD)"
        );
    }
    @Test
    void test6F1100Period(){
        assertEquals(
                3.8314941740051274,
                systemMock.system(-3.665 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -3.665 - 100 * PERIOD)"
        );
    }

    @Test
    void test7F1(){
        assertEquals(
                0.0,
                systemMock.system(-4.046),
                PRECISION,
                "Layer 2: [F1] (х = -4.046)"
        );
    }

    @Test
    void test7F1Period(){
        assertEquals(
                0.0,
                systemMock.system(-4.046 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.046 - PERIOD)"
        );
    }

    @Test
    void test7F1100Period(){
        assertEquals(
                0.0,
                systemMock.system(-4.046 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.046 - PERIOD)"
        );
    }

    @Test
    void testBoundaryPointsBetweenTheThirdAndFourthLineSegments() {
        assertEquals(
                Double.NaN,
                systemMock.system(-1.5 * PI),
                PRECISION,
                "Layer 2: F1[х = -1/5 * PI].  Граничные точки между третьим и четвертым отрезком"
        );
    }

    @Test
    void testRightNeighborhoodBoundaryPointsBetweenTheThirdAndFourthLineSegments() {
        assertEquals(
                Double.NaN,
                systemMock.system(-1.5 * PI + EPSILON),
                PRECISION,
                "Layer 2: F1[х = -1/5 * PI + EPS]. Окрестность справа Граничные точки между третьим и четвертым отрезком"
        );
    }

    @Test
    void testLeftNeighborhoodBoundaryPointsBetweenTheThirdAndFourthLineSegments() {
        assertEquals(
                Double.NaN,
                systemMock.system(-1.5 * PI - EPSILON),
                PRECISION,
                "Layer 2: F1[х = -1/5 * PI - EPS]. Окрестность слева Граничные точки между третьим и четвертым отрезком"
        );
    }

    @Test
    void test8F1(){
        assertEquals(
                25.466273223941126,
                systemMock.system(-4.783),
                PRECISION,
                "Layer 2: [F1] (х = -4.783)"
        );
    }

    @Test
    void test8F1Period(){
        assertEquals(
                25.466273223947017,
                systemMock.system(-4.783 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.783 - PERIOD)"
        );
    }

    @Test
    void test8F1100Period(){
        assertEquals(
                25.46627322393547,
                systemMock.system(-4.783 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.783 - 100 * PERIOD)"
        );
    }

    @Test
    void test9F1(){
        assertEquals(
                21.496,
                systemMock.system(-4.859),
                PRECISION,
                "Layer 2: [F1] (х = -4.859)"
        );
    }

    @Test
    void test9F1Period(){
        assertEquals(
                21.496,
                systemMock.system(-4.859 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.859 - PERIOD)"
        );
    }

    @Test
    void test9F1100Period(){
        assertEquals(
                21.496,
                systemMock.system(-4.859 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.859 - 100 * PERIOD)"
        );
    }

    @Test
    void test11F1(){
        assertEquals(
                25.579,
                systemMock.system(-4.991),
                PRECISION,
                "Layer 2: [F1] (х = -4.991)"
        );
    }

    @Test
    void test11F1Period(){
        assertEquals(
                25.579,
                systemMock.system(-4.991 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.991 - PERIOD)"
        );
    }

    @Test
    void test11F1100Period(){
        assertEquals(
                25.579,
                systemMock.system(-4.991 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.991 - 100 * PERIOD)"
        );
    }

    @Test
    void testTheBorderPointOfTheFourthPartIsAboutTwoPi() {
        assertEquals(
                Double.NaN,
                systemMock.system(-2.0 * PI + EPSILON),
                PRECISION,
                "Layer 2: F1[х = -2.0 * PI + EPSILON]. Граничная точка четвертой части около 2PI"
        );
    }

    ////////
    @Test
    void testTheSegmentNearZero() {
        assertEquals(
                1.0124238830548336,
                systemMock.system(0 + EPSILON),
                PRECISION,
                "Layer 2: [F2] (х = 0 + EPSILON). Отрезок около 0."
        );
    }

    @Test
    void test1F2() {
        assertEquals(
                0.037754813117587493,
                systemMock.system(0.0065),
                PRECISION,
                "Layer 2: [F2] (х = 0.0065)."
        );
    }
    @Test
    void test2F2() {
        assertEquals(
                0.001,
                systemMock.system(5),
                PRECISION,
                "Layer 2: [F2] (х = 5)."
        );
    }

}
