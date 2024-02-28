@RestController
@RequestMapping("/api/auth")
public class AuthController {
    // ...

    @PostMapping("/recover-password")
    public ResponseEntity<?> recoverPassword(@RequestBody RecoveryRequest recoveryRequest) {
        recoveryRequest.getEmail();
        recoveryRequest.getPhoneNumber();
        return ResponseEntity.ok("Password recovery initiated successfully.");
    }

    @PostMapping("/recover-username")
    public ResponseEntity<?> recoverUsername(@RequestBody RecoveryRequest recoveryRequest) {
        recoveryRequest.getEmail();
        recoveryRequest.getPhoneNumber();
        return ResponseEntity.ok("Username recovery initiated successfully.");
    }
}
