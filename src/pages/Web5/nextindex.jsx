
import { useState, useEffect } from "react";
import { Web5 } from "@web5/api/browser";
import styles from "../../../src/pages/style/Web5.module.css";

const doctorDID = 'did:ion:EiAmJ02qIwt6EBoxIUC4AXNSP49hA3GAoaH-WybrZgIYqQ:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiMEhBNTk1MFZJREVIeEVtM0lQbHNmTmpJVGtnNXNhd0VuOWpBenI0THgzayJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJ0cFZjbEJJUEFSYW9LeDNoNm8yM1ZlM0VDOTdFMHdCUGRGTVJKejdVSDlFIiwieSI6IjNUQ2pQUmRkTjZMdWplNmxZNEYyajI3OE4yaWpSN05fd1BVNkoteG1xTWsifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMCIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNCJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlDWjNGRG9GVTFtSF9sQWxDSlBTaWk0WVNPZkFsdDRYNkNQeVJLOUR1TThsQSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpREF4QUdIRV9uSDh1aE1PRnNmdkxsV2dqTEc2NnAxZ2plc1lxamVpeG1NQ0EiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUNVLTh1dUlLLWFDWDVNb1loaHNrZGVpdE5iNldYVnNIWVRudnNuQm5aMExBIn19';

const Home = () => {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [recipientDid, setRecipientDid] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageType, setMessageType] = useState('Secret');
  const [submitStatus, setSubmitStatus] = useState('');
  const [didCopied, setDidCopied] = useState(false);
  const [userRole, setUserRole] = useState('Visitor');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [lastPhysicalExam, setLastPhysicalExam] = useState('');
  const [medicalAppointmentReason, setMedicalAppointmentReason] = useState('');

  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect({ sync: '3s' });
      setWeb5(web5);
      setMyDid(did);

      if (web5 && did) {
        await configureProtocol(web5, did);

        const isDoctor = checkIfDoctor(did);
        setUserRole(isDoctor ? 'Doctor' : 'Visitor');
      }
    };
    initWeb5();
  }, []);

  const checkIfDoctor = (userDid) => {
    return userDid === doctorDID;
  };

 
  const showNotification = (message) => {
    alert(message);
  };




  const queryLocalProtocol = async (web5) => {
    return await web5.dwn.protocols.query({
      message: {
        filter: {
          protocol: "https://med-chain.com/protocol",
        },
      },
    });
  };


  const queryRemoteProtocol = async (web5, did) => {
    return await web5.dwn.protocols.query({
      from: did,
      message: {
        filter: {
          protocol: "https://med-chain.com/protocol",
        },
      },
    });
  };

  const installLocalProtocol = async (web5, protocolDefinition) => {
    return await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
  };

  const installRemoteProtocol = async (web5, did, protocolDefinition) => {
    const { protocol } = await web5.dwn.protocols.configure({
      message: {
        definition: protocolDefinition,
      },
    });
    return await protocol.send(did);
  };

  const defineNewProtocol = () => {
    return {
      protocol: "https://med-chain.com/protocol",
      published: true,
      types: {
        secretMessage: {
          schema: "https://example.com/secretMessageSchema",
          dataFormats: ["application/json"],
        },
        directMessage: {
          schema: "https://example.com/directMessageSchema",
          dataFormats: ["application/json"],
        },
      },
      structure: {
        secretMessage: {
          $actions: [
            { who: "anyone", can: "write" },
            { who: "author", of: "secretMessage", can: "read" },
          ],
        },
        directMessage: {
          $actions: [
            { who: "author", of: "directMessage", can: "read" },
            { who: "recipient", of: "directMessage", can: "read" },
            { who: "anyone", can: "write" },
          ],
        },
      },
    };
  };


const configureProtocol = async (web5, did) => {
  const protocolDefinition = defineNewProtocol();
  const protocolUrl = protocolDefinition.protocol;

  try {
    const { protocols: localProtocols, status: localProtocolStatus } = await queryLocalProtocol(web5, protocolUrl);
    if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
      const result = await installLocalProtocol(web5, protocolDefinition);
      console.log({ result });
      console.log("Protocol installed locally");
    }

    const { protocols: remoteProtocols, status: remoteProtocolStatus } = await queryRemoteProtocol(web5, did, protocolUrl);
    if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
      const result = await installRemoteProtocol(web5, did, protocolDefinition);
      console.log({ result });
      console.log("Protocol installed remotely");
    }
  } catch (error) {
    console.error('Error configuring protocol:', error);
  }
};



const writeToDwnSecretMessage = async (messageObj) => {
  try {
    const secretMessageProtocol = defineNewProtocol();
    const { record, status } = await web5.dwn.records.write({
      data: messageObj,
      message: {
        protocol: secretMessageProtocol.protocol,
        protocolPath: "secretMessage",
        schema: secretMessageProtocol.types.secretMessage.schema,
        recipient: myDid,
      },
    });

      console.log('Secret message written to DWN', { record, status });
      return record;
    } catch (error) {
      console.error('Error writing secret message to DWN', error);
    }
  };




  
  const writeToDwnDirectMessage = async (messageObj) => {
    try {
      const directMessageProtocol = defineNewProtocol();
      const { record, status } = await web5.dwn.records.write({
        data: messageObj,
        message: {
          protocol: directMessageProtocol.protocol,
          protocolPath: "directMessage",
          schema: directMessageProtocol.types.directMessage.schema,
          recipient: messageObj.recipientDid,
        },
      });
  
      if (status.code === 200) {
        return { ...messageObj, recordId: record.id };
      }
  
      console.log('Direct message written to DWN', { record, status });
      return record;
    } catch (error) {
      console.error('Error writing direct message to DWN', error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting message...');
    setSubmitStatus('Submitting...');

    try {
      const targetDid = messageType === 'Direct' ? recipientDid : myDid;
      let messageObj;
      let record;

      if (messageType === 'Direct') {
        console.log('Sending direct message...');
        messageObj = constructDirectMessage(recipientDid);
        record = await writeToDwnDirectMessage(messageObj);
      } else {
        messageObj = constructSecretMessage();
        record = await writeToDwnSecretMessage(messageObj);
      }

      if (record) {
        const { status } = await record.send(targetDid);
        console.log("Send record status in handleSubmit", status);
        setSubmitStatus('Message submitted successfully');
        await fetchMessages();
        showNotification('Message submitted successfully');
      } else {
        throw new Error('Failed to create record');
      }

      setMessage('');
      setImageUrl('');
    } catch (error) {
      console.error('Error in handleSubmit', error);
      setSubmitStatus('Error submitting message: ' + error.message);
      showNotification('Error submitting message');
    }
  };

  const constructDirectMessage = (recipientDid) => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
  
    return {
      text: message,
      timestamp: `${currentDate} ${currentTime}`,
      sender: myDid,
      type: 'Direct',
      recipientDid: recipientDid,
      imageUrl: imageUrl,
      fullName: fullName,
      city: city,
    state: state,
    zipcode: zipcode,
    email: email,
    lastPhysicalExam: lastPhysicalExam,
    medicalAppointmentReason: medicalAppointmentReason,
    };
    
  };
  

  const constructSecretMessage = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    return {
      text: message, 
      timestamp: `${currentDate} ${currentTime}`,
      sender: myDid, 
      type: 'Secret',
      imageUrl: imageUrl, 
      fullName: fullName,
      city: city,
    state: state,
    zipcode: zipcode,
    email: email,
    lastPhysicalExam: lastPhysicalExam,
    medicalAppointmentReason: medicalAppointmentReason,
    };
  };

  const fetchUserMessages = async () => {
    console.log('Fetching sent messages...');
    try {
      const response = await web5.dwn.records.query({
        from: myDid,
        message: {
          filter: {
            protocol: "https://med-chain.com/protocol",
            schema: "https://example.com/directMessageSchema",
          },
        },
      });

      if (response.status.code === 200) {
        const userMessages = await Promise.all(
          response.records.map(async (record) => {
            const data = await record.data.json();
            return {
              ...data, 
              recordId: record.id 
            };
          })
        );
        return userMessages
      } else {
        console.error('Error fetching sent messages:', response.status);
        return [];
      }

    } catch (error) {
      console.error('Error in fetchSentMessages:', error);
    }
    showNotification('Fetching sent messages...');
  };

  const fetchDirectMessages = async () => {
    console.log('Fetching received direct messages...');
    try {
      const response = await web5.dwn.records.query({
        message: {
          filter: {
            protocol: "https://med-chain.com/protocol",
          },
        },
      });

      if (response.status.code === 200) {
        const directMessages = await Promise.all(
          response.records.map(async (record) => {
            const data = await record.data.json();
            return {
              ...data, 
              recordId: record.id 
            };
          })
        );
        return directMessages
      } else {
        console.error('Error fetching sent messages:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error in fetchReceivedDirectMessages:', error);
    }
    showNotification('Fetching received direct messages...');
  };

  const fetchMessages = async () => {
    try {
      const userMessages = await fetchUserMessages();
      const directMessages = await fetchDirectMessages();
  
      // Combine user and direct messages
      const allMessages = [...(userMessages || []), ...(directMessages || [])];
  
      // Filter out deleted messages based on the user's role
      const filteredMessages = allMessages.filter(message => {
        if (userRole === 'Doctor') {
          // For doctors, show all messages
          return true;
        } else {
          // For visitors, filter out deleted messages
          return !message.deleted;
        }
      });
  
      setMessages(filteredMessages);
      showNotification('Messages fetched successfully');
    } catch (error) {
      console.error('Error fetching messages:', error);
      showNotification('Error fetching messages');
    }
  };

  











  


  const handleCopyDid = async () => {
    if (myDid) {
      try {
        await navigator.clipboard.writeText(myDid);
        setDidCopied(true);
        setTimeout(() => {
          setDidCopied(false);
        }, 1000);
        showNotification('DID copied to clipboard!');
      } catch (err) {
        console.error("Failed to copy DID: " + err);
      }
    }
  };




  const handleCopyRecipientDid = async (recipientDid) => {
    if (recipientDid) {
      try {
        await navigator.clipboard.writeText(recipientDid);
        setDidCopied(true);
        setTimeout(() => {
          setDidCopied(false);
        }, 1000);
        showNotification("DID copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy recipient's DID: " + err);
      }
    }
  };



 const handleCopySenderDid = async (senderDid) => {
    if (senderDid) {
      try {
        await navigator.clipboard.writeText(senderDid);
        setDidCopied(true);
        setTimeout(() => {
          setDidCopied(false);
        }, 1000);
        showNotification("DID copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy sender's DID: " + err);
      }
    }
  };



  const deleteMessage = async (recordId) => {
    try {
      const response = await web5.dwn.records.query({
        message: {
          filter: {
            recordId: recordId,
          },
        },
      });
  
      if (response.records && response.records.length > 0) {
        const record = response.records[0];
        const deleteResult = await record.delete();
  
        if (deleteResult.status.code === 202) {
          console.log('Message deleted successfully');
        
          await fetchMessages();
        } else {
          console.error('Error deleting message:', deleteResult.status);
        }
      } else {
        console.error('No record found with the specified ID');
      }
    } catch (error) {
      console.error('Error in deleteMessage:', error);
    }
  };
  

  return (
    <div>
      {/* <div className={styles.header}>
        <div className={styles.avatar}>DB</div>
        <h1 className={styles.title}>Digital Burn Book</h1>
      </div> */}
  
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          {/* Render options based on user role */}
          {userRole === 'Doctor' && (
            <>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your secret message here"
              />
             <select
                className={styles.select}
                value={messageType}
                onChange={(e) => setMessageType(e.target.value)}
              >
                <option value="Secret">Save to self</option>
                <option value="Direct">Confidential</option>
              </select>
              {messageType === 'Direct' && (
                <input
                  className={styles.input}
                  type="text"
                  value={recipientDid}
                  onChange={e => setRecipientDid(e.target.value)}
                  placeholder="Enter recipient's DID"
                />
              )}
                <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">Set Appointment</button>
            <button className={styles.secondaryButton} type="button" onClick={fetchMessages}>Refresh Appointments</button>
            <button className={styles.secondaryButton} type="button" onClick={handleCopyDid}>Copy My DID</button>
          </div>
            </>
          )}
          
          {userRole === 'Visitor' && (
            <>
              <input
              className={styles.input}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              />
              <input
              className={styles.input}
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your current city"
              />
              <input
              className={styles.input}
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter state"
              />
              <input
              className={styles.input}
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="Enter zipcode"
              />
              <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              />
              <input
              className={styles.input}
              type="date"
              value={lastPhysicalExam}
              onChange={(e) => setLastPhysicalExam(e.target.value)}
              placeholder="Enter date of last physical exam"
              />
              <textarea
              className={styles.textarea}
              value={medicalAppointmentReason}
              onChange={(e) => setMedicalAppointmentReason(e.target.value)}
              placeholder="Enter reason for medical appointment"
              />
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Anything you would like the doctor to know?"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Enter image URL (optional)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <select
                className={styles.select}
                value={messageType}
                onChange={(e) => setMessageType(e.target.value)}
              >
                <option value="Secret">Save to self</option>
                <option value="Direct">Confidential</option>
              </select>
              {messageType === 'Direct' && (
                <input
                  className={styles.input}
                  type="text"
                  value={recipientDid}
                  onChange={e => setRecipientDid(e.target.value)}
                  placeholder="Enter recipient's DID"
                />
              )}
               <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">Submit Message</button>
            <button className={styles.secondaryButton} type="button" onClick={fetchMessages}>Refresh Appointments</button>
            <button className={styles.secondaryButton} type="button" onClick={handleCopyDid}>Copy My DID</button>
          </div>
            </>
          )}
  
          {/* <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">Submit Message</button>
            <button className={styles.secondaryButton} type="button" onClick={fetchMessages}>Refresh Appointments</button>
            <button className={styles.secondaryButton} type="button" onClick={handleCopyDid}>Copy My DID</button>
          </div> */}
        </form>
  
        {didCopied && <p className={styles.alertText}>DID copied to clipboard!</p>}
      </div>
  
      {messages.map((message, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.field}>
            <div className={styles.fieldName}>From:</div>
            <div className={styles.didContainer}>{message.sender}</div>
           
    
            {message.type === 'Direct' && (
              <>
                <button
                  className={styles.secondaryButton}
                  onClick={() => handleCopySenderDid(message.sender)}
                >
                  Copy Sender's DID
                </button>
                <div className={styles.field}>
                  <div className={styles.fieldName}>Recipient:</div>
                  <div className={styles.didContainer}>{message.recipientDid}</div>
                  <button
                    className={styles.secondaryButton}
                    onClick={() => handleCopyRecipientDid(message.recipientDid)}
                  >
                    Copy Recipient's DID
                  </button>
                </div>
              </>
            )}
             <div className={styles.fieldName}>Full Name:</div>
            <div className={styles.didContainer}>{message.fullName}</div>
            <div className={styles.fieldName}>City:</div>
            <div className={styles.didContainer}>{message.city}</div>
            <div className={styles.fieldName}>State:</div>
            <div className={styles.didContainer}>{message.state}</div>
            <div className={styles.fieldName}>Zipcode:</div>
            <div className={styles.didContainer}>{message.zipcode}</div>
            <div className={styles.fieldName}>Email:</div>
            <div className={styles.didContainer}>{message.email}</div>
            <div className={styles.fieldName}>Last Physical Exam:</div>
            <div className={styles.didContainer}>{message.lastPhysicalExam}</div>
            <div className={styles.fieldName}>Medical Appointment Reason:</div>
            <div className={styles.didContainer}>{message.medicalAppointmentReason}</div>
          </div>
  
          <div className={styles.field}>
            <div className={styles.fieldName}>Timestamp</div>
            <div>{message.timestamp}</div>
          </div>
          <div className={styles.messageRow}>
            <div className={styles.messageContent}>
              <div className={styles.fieldName}>Message</div>
              <div>{message.text}</div>
            </div>
            {message.sender === myDid && (
              <button
                className={styles.deleteButton}
                onClick={() => deleteMessage(message.recordId)}
              >
                Delete
              </button>
            )}
          </div>
          {message.imageUrl && (
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={message.imageUrl}
                alt="Uploaded content"
              />
            </div>
          )}
          <div className={`${styles.messageType} ${styles[message.type.toLowerCase()]}`}>
            {message.type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;






























// code starts here







