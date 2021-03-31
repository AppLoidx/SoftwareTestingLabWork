package com.itmoprofessionals.softwaretest.lab2;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static java.lang.Math.PI;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class FourthLayerTest {
    final static double EPSILON = 1E-10;
    final static double PERIOD = 2* PI;
    final static double PRECISION = 0.001;
    static SystemOfEquations systemMock;

    @BeforeAll
    static void createMock() {
        systemMock = Mockito.mock(SystemOfEquations.class, Mockito.CALLS_REAL_METHODS);
        /*
          Негативная часть функции имеет вид периодической функции, которая
          состоит из 4-ех частей.
          В каждой части есть граничные точки, экстремумы или точки перегиба

          Граничные точки представляют собой точки разрыва второго рода. В таких
          точках невозможно посчитать значение функции и предел функции, в
          окрестностях этих точек стремиться к +- бесконечности

          Для тестирования были исследованы все точки разрыва первого и второго рода,
          была проконтролирована соблюдение периодичности, и выбраны и протестированы
          точки в каждом классе эквивалентности.
         */

        // Значения около 0 и в эпсилон-окрестности от 0 + период
        // when(systemMock.system(0)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0)).thenReturn(0.0);


        // when(systemMock.system(0.0 - PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0 - PERIOD)).thenReturn(0.0);



        // when(systemMock.system(0.0 - 100 * PERIOD)).thenReturn(Double.NaN);
        when(systemMock.sin(0.0 - 100 * PERIOD)).thenReturn(0.0);


        // when(systemMock.system(0.0 - EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON)).thenReturn(0.0);


        // when(systemMock.system(0.0 - EPSILON - PERIOD)).thenReturn(POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON - PERIOD)).thenReturn(0.0);


        // when(systemMock.system(0.0 - EPSILON - 100 * PERIOD)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.sin(0.0 - EPSILON - 100 * PERIOD)).thenReturn(0.0);

        //не-парабола
        //when(systemMock.system(-1.288)).thenReturn(25.8);
        when(systemMock.sin(-1.288)).thenReturn(-0.96027890115);

        //
        when(systemMock.sin(-1.288 - PERIOD)).thenReturn(-0.96027890115);

        //
        when(systemMock.sin(-1.288 - 100 * PERIOD)).thenReturn(-0.96027890115);

        //when(systemMock.system(-1.425)).thenReturn(21.496);
        when(systemMock.sin(-1.425)).thenReturn(-0.98939052895);

        //
        when(systemMock.sin(-1.425 - PERIOD)).thenReturn(-0.98939052895);

        //
        when(systemMock.sin(-1.425 - 100 * PERIOD)).thenReturn(-0.98939052895);

        //when(systemMock.system(-1.5)).thenReturn(25.58);
        when(systemMock.sin(-1.5)).thenReturn(-0.9974949866);

        //
        when(systemMock.sin(-1.5 - PERIOD)).thenReturn(-0.9974949866);

        //
        when(systemMock.sin(-1.5 - 100 * PERIOD)).thenReturn(-0.9974949866);

        //разрыв в -0.5пи
        //
        when(systemMock.sin(-0.5 * PI)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - 100 * PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON - PERIOD)).thenReturn(-1.0);

        //
        when(systemMock.sin(-0.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(-1.0);

        //возрастающая часть
        //
        when(systemMock.sin(-1.7)).thenReturn(-0.991664810452);


        //
        when(systemMock.sin(-1.7 - PERIOD)).thenReturn(-0.991664810452);

        //
        when(systemMock.sin(-1.7 - 100 * PERIOD)).thenReturn(-0.991664810452);

        //0
        //when(systemMock.system(-2.237)).thenReturn(0.0);
        when(systemMock.sin(-2.237)).thenReturn(-0.78617347771);

        //
        when(systemMock.sin(-2.237 - PERIOD)).thenReturn(-0.78617347771);

        //
        when(systemMock.sin(-2.237 - 100 * PERIOD)).thenReturn(-0.78617347771);

        // разрыв второго рода
        // Граничное значение между второй и третьей частями и окрестности точки PI
        // when(systemMock.system(-PI)).thenReturn(Double.NaN)
        when(systemMock.sin(-PI)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI - PERIOD)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI - 100 * PERIOD)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI + EPSILON)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI + EPSILON - PERIOD)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI + EPSILON - 100 * PERIOD)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI - EPSILON)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI - EPSILON - PERIOD)).thenReturn(0.0);

        //
        when(systemMock.sin(-PI - EPSILON - 100 * PERIOD)).thenReturn(0.0);

        //убывает
        //when(systemMock.system(-3.665)).thenReturn(3.801);
        when(systemMock.sin(-3.665)).thenReturn(0.4998342083);

        //
        when(systemMock.sin(-3.665 - PERIOD)).thenReturn(0.4998342083);

        //
        when(systemMock.sin(-3.665 - 100 * PERIOD)).thenReturn(0.4998342083);

        //0
        //when(systemMock.system(-4.046)).thenReturn(0.0);
        when(systemMock.sin(-4.046)).thenReturn(0.78605894328);

        //
        when(systemMock.sin(-4.046 - PERIOD)).thenReturn(0.78605894328);

        //
        when(systemMock.sin(-4.046 - 100 * PERIOD)).thenReturn(0.78605894328);

        //разрыв в -1.5пи
        when(systemMock.sin(-1.5 * PI)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - 100 * PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI + EPSILON - 100 * PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON - PERIOD)).thenReturn(1.0);

        //
        when(systemMock.sin(-1.5 * PI - EPSILON - 100 * PERIOD)).thenReturn(1.0);

        //не-парабола
        //when(systemMock.system(-4.783)).thenReturn(25.61);
        when(systemMock.sin(-4.783)).thenReturn(0.99750807758);

        //
        when(systemMock.sin(-4.783 - PERIOD)).thenReturn(0.99750807758);

        //
        when(systemMock.sin(-4.783 - 100 * PERIOD)).thenReturn(0.99750807758);

        //when(systemMock.system(-4.859)).thenReturn(21.496);
        when(systemMock.sin(-4.859)).thenReturn(0.98927184176);

        //
        when(systemMock.sin(-4.859 - PERIOD)).thenReturn(0.98927184176);

        //
        when(systemMock.sin(-4.859 - 100 * PERIOD)).thenReturn(0.98927184176);

        //when(systemMock.system(-4.991)).thenReturn(25.579);
        when(systemMock.sin(-4.991)).thenReturn(0.96143836369);
        //
        when(systemMock.sin(-4.991 - PERIOD)).thenReturn(0.96143836369);

        //
        when(systemMock.sin(-4.991 - 100 * PERIOD)).thenReturn(0.96143836369);

        //разрыв в -2пи
        when(systemMock.sin(-2.0 * PI + EPSILON)).thenReturn(0.0);

        ////////////

        //Функция монотонно убывает на всей ООФ
        //when(systemMock.system(0 + EPSILON)).thenReturn(Double.POSITIVE_INFINITY);
        when(systemMock.ln(0 + EPSILON)).thenReturn(Double.NEGATIVE_INFINITY);

        //when(systemMock.system(0.0065)).thenReturn(0.0379);
        when(systemMock.ln(0.0065)).thenReturn(-5.03595310208);

        //when(systemMock.system(5)).thenReturn(0.001);
        when(systemMock.ln(5)).thenReturn(1.60943791243);

    }

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
                25.8,
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
                25.58,
                systemMock.system(-1.5),
                PRECISION,
                "Layer 2: [F1] (х = -1.5)"
        );
    }

    @Test
    void test3F1Period(){
        assertEquals(
                25.58,
                systemMock.system(-1.5 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.5 - PERIOD)"
        );
    }

    @Test
    void test3F1100Period(){
        assertEquals(
                25.58,
                systemMock.system(-1.5 - 100 * PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -1.5 - 100 * PERIOD)"
        );
    }

    @Test
    void testIndefiniteValueInHalfPi() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2),
                PRECISION,
                "Layer 2: F1[х = -PI / 2]. При неопределенном значении."
        );
    }

    @Test
    void testIndefiniteValueInHalfPiFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - PERIOD]. При неопределенном значении. Сдвиг на один период"
        );
    }

    @Test
    void testIndefiniteValueInHalfPiHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - 100 * PERIOD]. При неопределенном значении. Сдвиг на сто периодов"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPi() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 + EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS]. Граничное значение справа от -PI/2. x->-pi/2+"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPiFirstPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 + EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS - PERIOD]. Граничное значение справа от PI/2. x->pi/2+. Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueToTheRightOfHalfPiHundredthPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 + EPSILON - 100 * PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 + EPS - 100 * PERIOD]. Граничное значение справа от -PI/2. x->-pi/2+. Сдвиг на сто периодов"
        );
    }


    @Test
    void testBoundaryValueToTheLeftOfHalfPi() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 - EPSILON),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - EPS]. Граничное значение справа от -PI/2. x->-pi/2-"
        );
    }

    @Test
    void testBoundaryValueToTheRightOfHalfPiLeftPeriod() {
        assertEquals(
                Double.NaN,
                systemMock.system(-PI / 2 - EPSILON - PERIOD),
                PRECISION,
                "Layer 2: F1[х = -PI / 2 - EPS - PERIOD]. Граничное значение справа от -PI/2. x->-pi/2-. Сдвиг на один период"
        );
    }


    @Test
    void testBoundaryValueToTheLeftOfHalfPiHundredthPeriod() {
        assertEquals(
                Double.NaN,
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
                -2.017,
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
                3.801,
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
                25.61,
                systemMock.system(-4.783),
                PRECISION,
                "Layer 2: [F1] (х = -4.783)"
        );
    }

    @Test
    void test8F1Period(){
        assertEquals(
                25.61,
                systemMock.system(-4.783 - PERIOD),
                PRECISION,
                "Layer 2: [F1] (х = -4.783 - PERIOD)"
        );
    }

    @Test
    void test8F1100Period(){
        assertEquals(
                25.61,
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
                Double.NaN,
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
