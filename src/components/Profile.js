import React from "react";
import "./Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import {useRef} from "react";
import FormData from 'form-data'
import { Buffer } from "buffer";
export default function Profile(){
   
    const [user, setUser] = useState([]);
    const id=1;
    const emailAddress="d@asdada";
    const email=useRef();
    const name=useRef();
    const password=useRef();
    const mission=useRef();asdsdadf
  /*useEffect(() => {
    axios
      .get("http://localhost:8080/user/"+id)
      .then((result) => {
        console.log(result.data);
        setUser(result.data);
      })
      .catch((error) => console.log(error));
  }, []);*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/"+id);
        console.log(response.data); // Log the response data to ensure it's correct
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const imageUrl1=`data:image/jpeg;base64,${user.profilePicture}`;
  const handleSubmit = (event) => {
    event.preventDefault();

        axios.put("http://localhost:8080/user/"+id,{
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            mission: mission.current.value
        }).then(response=>{
            console.log(response);
            if (response.status === 200){
                alert("Profile Information Updated Successfully.")
            }
        }).then((response)=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })
  }


    const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error('No file selected.');
        return;
      }
  
      const formData = new FormData();
      formData.append('file', file);
  
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      await axios.put("http://localhost:8080/user/"+id, formData,{
        headers:{
            'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    window.location.reload();
  };

        return (
            <div class="container-xl px-4 mt-4">
            <hr class="mt-0 mb-4"></hr>
            <div class="row">
                <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                            <img class="img-account-profile rounded-circle mb-2" src={imageUrl1} alt="Profile"></img>
                            <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            <input type="file" onChange={handleFileChange} accept="image/*" />
                            <button onClick={handleUpload}>Upload Image</button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                            <form class="profile" noValidate onSubmit={handleSubmit}>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputFullName">Full Name</label>
                                        <input class="form-control" id="inputFullName" type="text" defaultValue={user.name} ref={name}></input>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                        <input class="form-control" id="inputEmailAddress" type="text" defaultValue={user.email} ref={email}></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputPassword">Password</label>
                                    <input class="form-control" id="inputPassword" type="email" defaultValue={user.password} ref={password}></input>
                                </div>
                                <div class="mb-3">
                                        <label class="small mb-1" for="inputMission">Mission (Background Information)</label>
                                        <textarea class="form-control2" id="inputMission" defaultValue={user.mission} ref={mission}></textarea>
                                    </div>
                                <input type="submit" value="Save changes"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
}
