export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: string;
  name: string;
  imageUri: string;
  status: string;
};

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
};
