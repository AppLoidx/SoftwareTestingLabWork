package com.itmoprofessionals.softwaretest.domain;

import java.util.Objects;

public class Sun implements Burnable {
    private final int sunId;
    private boolean isBurning;

    public Sun(int sunId, boolean isBurning) {
        this.sunId = sunId;
        this.isBurning = isBurning;
    }

    public int getSunId() {
        return sunId;
    }

    public boolean isBurning() {
        return isBurning;
    }

    @Override
    public void burn(int sunId) {
        isBurning = true;
        System.out.println("Sun number " + sunId + " start burning");
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Sun sun = (Sun) o;
        return sunId == sun.sunId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(sunId);
    }
}
