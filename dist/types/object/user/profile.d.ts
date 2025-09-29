import {UUID} from "../../base";
import {MediaImage} from "../media";

export declare type UserProfile = {
    User_Profile__: UUID;
    Birthdate: string | '0000-00-00';
    Display_Name: string;
    Gender: 'M' | 'F' | 'NB' | null
    Birthdate_Visibility: 'hidden' | 'year_only' | 'month_day_only' | 'full';
    Allow_Mature_Content: 'Y' | 'N';
    Media_Image?: MediaImage;
}
