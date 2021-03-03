package com.itmoprofessionals.softwaretest.domain.context;

/**
 * Functional interface for processing {@link Event}
 */
@FunctionalInterface
public interface EventProcessor {
    /**
     * Represent event as simple string
     * @param event nullable (all implementations should check for null)
     * @return string representation of event
     */
    String processEvent(Event event);
}
