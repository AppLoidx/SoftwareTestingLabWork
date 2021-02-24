package com.itmoprofessionals.softwaretest.text;

public class Sun implements Burnable {
    int sunId;
    boolean isBurning = false;

    public Sun(int sunId, boolean isBurning) {
        this.sunId = sunId;
        this.isBurning = isBurning;
    }

    @Override
    public void burn(int sunId) {
        isBurning = true;
        System.out.println("Sun number " + sunId + " start burning");
    }
}
