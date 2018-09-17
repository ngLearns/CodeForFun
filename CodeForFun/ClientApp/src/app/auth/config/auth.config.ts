import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: 'https://localhost:5003',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/login-callback',

    // URL of the SPA to redirect the user after silent refresh
    silentRefreshRedirectUri: window.location.origin + '/silent',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'codeforfun_angular',

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email codeforfun',

    silentRefreshShowIFrame: false,

    showDebugInformation: true,

    sessionChecksEnabled: false
};
