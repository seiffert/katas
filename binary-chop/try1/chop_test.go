package main

import "testing"

func TestChop(t *testing.T) {
	assertEqual(t, -1, chop(3, []int{}))
	assertEqual(t, -1, chop(3, []int{1}))
	assertEqual(t, 0, chop(1, []int{1}))

	assertEqual(t, 0, chop(1, []int{1, 3, 5}))
	assertEqual(t, 1, chop(3, []int{1, 3, 5}))
	assertEqual(t, 2, chop(5, []int{1, 3, 5}))
	assertEqual(t, -1, chop(0, []int{1, 3, 5}))
	assertEqual(t, -1, chop(2, []int{1, 3, 5}))
	assertEqual(t, -1, chop(4, []int{1, 3, 5}))
	assertEqual(t, -1, chop(6, []int{1, 3, 5}))

	assertEqual(t, 0, chop(1, []int{1, 3, 5, 7}))
	assertEqual(t, 1, chop(3, []int{1, 3, 5, 7}))
	assertEqual(t, 2, chop(5, []int{1, 3, 5, 7}))
	assertEqual(t, 3, chop(7, []int{1, 3, 5, 7}))
	assertEqual(t, -1, chop(0, []int{1, 3, 5, 7}))
	assertEqual(t, -1, chop(2, []int{1, 3, 5, 7}))
	assertEqual(t, -1, chop(4, []int{1, 3, 5, 7}))
	assertEqual(t, -1, chop(6, []int{1, 3, 5, 7}))
	assertEqual(t, -1, chop(8, []int{1, 3, 5, 7}))
}

func assertEqual(t *testing.T, expected, actual int) {
	if expected != actual {
		t.Fatalf("%d (actual) != %d (expected)", actual, expected)
	}
}
