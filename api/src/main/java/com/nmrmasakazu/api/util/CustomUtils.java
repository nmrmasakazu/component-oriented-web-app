package com.nmrmasakazu.api.util;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CustomUtils {

    private CustomUtils() {}
    // 24 Pattern to evaluate AGF by iWakka
    public static List<String> iWakkaTrialPattern = Arrays.asList("024143",
            "024134",
            "024341",
            "024314",
            "042125",
            "042152",
            "042521",
            "042512",
            "204143",
            "204134",
            "204341",
            "204314",
            "240305",
            "240350",
            "240503",
            "240530",
            "402125",
            "402152",
            "402521",
            "402512",
            "420305",
            "420350",
            "420503",
            "420530");

    public static Map<Character, String> patternName = new HashMap<Character, String>() {
        {
            put("0".charAt(0), "evalMountain");
            put("1".charAt(0), "evalMountain");
            put("2".charAt(0), "evalValley");
            put("3".charAt(0), "evalValley");
            put("4".charAt(0), "sinewave");
            put("5".charAt(0), "sinewave");
        }
    };

    public static List<Integer> templatePoints = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    public static List<String> templateFeedBacks = Arrays.asList("簡単", "続行", "難しい");
}
