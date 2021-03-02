package com.itmoprofessionals.softwaretest.domain.context;

import org.jetbrains.annotations.NotNull;

public interface EventProcessor {
    String processEvent(@NotNull Event event);
}
