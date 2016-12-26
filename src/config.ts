export class AtConfig {
    private static is本番 = false;
    static clientID = AtConfig.is本番 ? "585f98856952f506e3238075" : "585d1498c2c13f04305f0de8";
    static clientURL = AtConfig.is本番 ? "https://anontown.com" : "http://localhost:4100";
    static userURL = AtConfig.is本番 ? "https://user.anontown.com" : "http://localhost:4201";
    static serverURL = AtConfig.is本番 ? "https://api.anontown.com" : "http://localhost:8081";
}