package com.itmoprofessionals.softwaretest.math;

/**
 * The class {@code SuperMath} contains methods for performing basic
 * numeric operations for laboratory work such as sin, factorial
 */
public final class SuperMath {

    private SuperMath() { }

    /**
     * Returns the trigonometric sine of an angle.  Special cases:
     * <ul><li>If the argument is NaN or an infinity, then the
     * result is NaN.
     * <li>If the argument is zero, then the result is a zero with the
     * same sign as the argument.</ul>
     *
     * @param a an angle, in radians.
     * @return the sine of the argument.
     */
    public static double sin(double a) {
        if (Double.isNaN(a) || Double.isInfinite(a)) return Double.POSITIVE_INFINITY;
        else if (a == 0) return a;  // with the same sign [I hope :)]

        double result = 0;
        for (int n = 1; n < 7; n++) {
            result += Math.pow(-1, n - 1) * Math.pow(a, 2 * n - 1) / factorial(2 * n - 1);
        }
        return result;
    }

    /**
     * Returns  the factorial of a number
     *
     * Special case:
     * <ul>
     *     <li>If result overflows {@link Integer#MAX_VALUE} value, then throws {@link ArithmeticException}</li>
     * </ul>
     *
     * @param number positive value
     * @return factorial of a number
     * @see Math#multiplyExact(int, int)
     * @throws ArithmeticException if the result overflows an int
     * @throws IllegalArgumentException if the result less than zero
     */
    public static int factorial(int number) {

        if (number < 0) throw new IllegalArgumentException("argument can't be less than zero");
        if (number == 0) return  1;

        int result = 1;

        for (int i = 1; i <= number; i++) {
            result = Math.multiplyExact(result, i);
        }

        return result;

    }
}
