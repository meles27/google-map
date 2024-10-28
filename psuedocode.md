FUNCTION authenticateUser(action, credentials)
IF action IS "LOGIN"
// Call API to log in the user
response = callAPI("POST", "/api/login", credentials)

        IF response.status IS "success"
            // Store tokens in the state
            storeInState("accessToken", response.data.accessToken)
            storeInState("refreshToken", response.data.refreshToken)
            storeInState("authenticated", TRUE)
            PRINT "User logged in successfully."

        ELSE
            PRINT "Login failed: " + response.message

    ELSE IF action IS "LOGOUT"
        // Clear tokens and set authenticated to false
        clearState("accessToken")
        clearState("refreshToken")
        storeInState("authenticated", FALSE)
        PRINT "User logged out successfully."

    ELSE IF action IS "REFRESH_TOKEN"
        // Call API to refresh the token
        refreshResponse = callAPI("POST", "/api/refresh-token", {
            token: getState("refreshToken")
        })

        IF refreshResponse.status IS "success"
            // Update access token in the state
            storeInState("accessToken", refreshResponse.data.accessToken)
            PRINT "Access token refreshed successfully."

        ELSE
            PRINT "Failed to refresh token: " + refreshResponse.message
            // Optionally log out the user if refresh fails
            CALL authenticateUser("LOGOUT")

    ENDIF

END FUNCTION

FUNCTION checkTokenExpiration(token)
IF NOT token EXISTS
RETURN TRUE // Token is considered expired

    decoded = jwtDecode(token)
    currentTime = getCurrentTimeInSeconds()

    IF decoded.exp < currentTime
        RETURN TRUE // Token is expired
    ELSE
        RETURN FALSE // Token is valid
    ENDIF

END FUNCTION

// Main flow
FUNCTION main()
// Example usage
userAction = prompt("Enter action (LOGIN, LOGOUT, REFRESH_TOKEN):")

    IF userAction IS "LOGIN"
        credentials = promptForCredentials()
        CALL authenticateUser("LOGIN", credentials)

    ELSE IF userAction IS "LOGOUT"
        CALL authenticateUser("LOGOUT")

    ELSE IF userAction IS "REFRESH_TOKEN"
        IF checkTokenExpiration(getState("accessToken")) IS TRUE
            CALL authenticateUser("REFRESH_TOKEN")
        ELSE
            PRINT "Access token is still valid."
        ENDIF

    ENDIF

END FUNCTION
