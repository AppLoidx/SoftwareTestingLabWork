package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;
import com.itmoprofessionals.softwaretest.domain.context.EventType;

public class Dot extends Spark {
    private boolean isSpark = false;

    public Dot(int objectId, boolean isSpark) {
        super(objectId);
        this.isSpark = isSpark;
    }


    @Override
    public Event spark() {
        isSpark = true;
        return Event.of("Dot number " + this.getId() + " sparkled", EventType.SPARK);
    }

    @Override
    public Event light() {
        return Event.of("Dot number " + this.getId() + " started lighting", EventType.LIGHT);
    }

    public boolean isSpark() {
        return isSpark;
    }

    @Override
    public Event appear() {
        return Event.of("Dot number " + this.getId() + " is appeared", EventType.APPEAR);
    }
}
