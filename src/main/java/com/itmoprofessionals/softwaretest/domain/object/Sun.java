package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

public class Sun extends PhysicalObject implements Burnable {

    private boolean isBurning;

    public Sun(int objectId, boolean isBurning) {
        super(objectId);
        this.isBurning = isBurning;
    }

    public boolean isBurning() {
        return isBurning;
    }

    @Override
    public String getObjectTypeName() {
        return "Sun";
    }

    @Override
    public Event burn() {
        isBurning = true;
        return Event.of("Sun number " + this.getId() + " start burning", EventType.BURN, this);
    }

    @Override
    public Event appear() {
        return Event.of("Sun number " + this.getId() + " is appeared", EventType.APPEAR, this);
    }

}
