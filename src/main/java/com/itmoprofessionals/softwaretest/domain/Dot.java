package com.itmoprofessionals.softwaretest.domain;

import java.util.Objects;

public class Dot extends Spark {
    private final int dotId;
    boolean isSpark = false;

    public Dot(int dotId, boolean isSpark) {
        this.dotId = dotId;
        this.isSpark = isSpark;
    }


    @Override
    public void spark() {
        isSpark = true;
        System.out.println("Dot number " + this.dotId + " sparkled");
    }

    @Override
    public void light() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dot dot = (Dot) o;
        return dotId == dot.dotId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(dotId);
    }
}
