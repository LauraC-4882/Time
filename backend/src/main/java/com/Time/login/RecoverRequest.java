public class RecoveryRequest {
    private String email;
    private String phone;

    public RecoveryRequest() {
        // Default constructor
    }

    public RecoveryRequest(String email, String phone) {
        this.email = email;
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phone;
    }

    public void setPhoneNumber(String phone) {
        this.phone = phone;
    }
}
