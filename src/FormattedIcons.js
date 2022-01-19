import React from "react";
import "./Weather.css";

// The following CSS file must be installed for use of WeatherIcon.
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

export default function FormattedIcons(props) {
  // console.log(`Code ID: ${props.iconId}`);
  // console.log(`Code: ${props.icon}`);
  // console.log(`Code: ${props.icon[2]}`);

  // handles whether the icon displays a sun or a moon, depending on the time of the searched city. If the weather icon contains "d", the icon displays a sun. If the weather icon contains "n", the icon displays a moon by adding the "night" parameter.
  if (props.icon[2] === "d") {
    return <WeatherIcon iconId={props.iconId} name="owm" />;
  } else if (props.icon[2] === "n") {
    return <WeatherIcon iconId={props.iconId} name="owm" night />;
  }
}
