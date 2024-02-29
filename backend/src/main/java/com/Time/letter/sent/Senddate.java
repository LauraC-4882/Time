import org.springframework.web.bind.annotation.*;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class Senddate {
    private int[] date;

    public (int[] date) {
        this.date = date;

    }

    public String getDate() {
        return date;
    }

    public void setDate(int[] date) {
        this.date = date;
    }
}
