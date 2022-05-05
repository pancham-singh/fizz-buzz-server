import { generateFizzBuzz } from "@repos/fizzBuzz-repo";

/**
 * Get all users.
 * 
 * @returns 
 */
 export function  getFizzBuzz(count: number): string[] {
    return  generateFizzBuzz(count);
}