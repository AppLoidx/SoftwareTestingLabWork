package com.itmoprofessionals.softwaretest.domain.object;

import com.itmoprofessionals.softwaretest.domain.context.Event;

public abstract class Spark extends PhysicalObject {
    public Spark(int id) {
        super(id);
    }

    @Override
    public String getObjectTypeName() {
        return "Spark";
    }

    public abstract Event spark();

    public abstract Event light();
}
