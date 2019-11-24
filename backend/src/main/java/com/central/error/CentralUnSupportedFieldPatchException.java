package com.central.error;

import java.util.Set;

public class CentralUnSupportedFieldPatchException extends RuntimeException {

    private static final long serialVersionUID = -9107108995227545249L;

	public CentralUnSupportedFieldPatchException(Set<String> keys) {
        super("Field " + keys.toString() + " update is not allow.");
    }

}
