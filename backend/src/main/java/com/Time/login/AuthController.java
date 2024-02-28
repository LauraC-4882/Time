@RestController
@RequestMapping("/api/auth")
public class AuthController {
    // ...

    @PostMapping("/recover-password")
    public ResponseEntity<?> recoverPassword(@RequestBody RecoveryRequest recoveryRequest) {
        // Implement password recovery logic using email or phone number
    }

    @PostMapping("/recover-username")
    public ResponseEntity<?> recoverUsername(@RequestBody RecoveryRequest recoveryRequest) {
        // Implement username recovery logic using email or phone number
    }
}
