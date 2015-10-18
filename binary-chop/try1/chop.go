package main

import "math"

func chop(needle int, haystack []int) int {
	if len(haystack) == 0 {
		return -1
	}

	midIndex := int(math.Floor(float64(len(haystack)) / 2.0))
	midValue := haystack[midIndex]

	if midValue == needle {
		return midIndex
	}

	if midValue > needle && midIndex > 0 {
		if res := chop(needle, haystack[:midIndex]); res != -1 {
			return res
		}
	}

	if midValue < needle && midIndex < len(haystack)-1 {
		offset := midIndex + 1
		if res := chop(needle, haystack[offset:]); res != -1 {
			return offset + res
		}
	}

	return -1
}
