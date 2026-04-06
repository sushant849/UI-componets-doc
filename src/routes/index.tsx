import { Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import GetStarted from "../pages/get-started/Overview";
import Installation from "../pages/get-started/Installation";
import ConfigTablePage from "../pages/components/ConfigTable";
import ModelEditorTest from "../pages/components/ModelEditor";
import PromptEditorPage from "../pages/components/PromptEditor";
import ButtonPage from "../pages/components/Button";
import CloseButtonPage from "../pages/components/CloseButton";
import DownloadTriggerPage from "../pages/components/DownloadTrigger";
import IconButtonPage from "../pages/components/IconButton";
import ChatActionsPage from "../pages/components/ChatActions";
import ChatDemoPage from "../pages/components/ChatDemo";
import ChatMessagePage from "../pages/components/ChatMessage";
import EmptyStatePage from "../pages/components/EmptyState";
import ErrorStatePage from "../pages/components/ErrorState";
import LayoutShellPage from "../pages/components/LayoutShell";
import LoaderPage from "../pages/components/Loader";
import AvatarPage from "../pages/components/Avatar";
import BadgePage from "../pages/components/Badge";
import CardPage from "../pages/components/Card";
import ClipboardPage from "../pages/components/Clipboard";
import DataListPage from "../pages/components/DataList";
import TableComponentPage from "../pages/components/TableComponent";
import TagPage from "../pages/components/Tag";
import DatePickerPage from "../pages/components/DatePicker";
import Accordion from "../pages/components/Accordion";
import Carousel from "../pages/components/Carousel";
import Collapsible from "../pages/components/Collapsible";
import CheckboxPage from "../pages/components/Checkbox";
import FieldsetPage from "../pages/components/Fieldset";
import FieldPage from "../pages/components/Field";
import FileUploadPage from "../pages/components/FileUpload";
import InputPage from "../pages/components/Input";
import NumberInputPage from "../pages/components/NumberInput";
import PasswordInputPage from "../pages/components/PasswordInput";
import RadioGroup from "../pages/components/RadioGroup";
import Sidebar from "../components/Sidebar";
import SwitchPage from "../pages/components/Switch";
import TagsInputPage from "../pages/components/TagsInput";
import DropzonePage from "../pages/components/Dropzone";
import FileQueuePage from "../pages/components/FileQueue";
import UploadProgressPage from "../pages/components/UploadProgress";


export const AppRoutes = (
  <Route path="/" element={<MainLayout />}>
    <Route index element={<GetStarted />} />
    <Route path="get-started/installation" element={<Installation />} />

    <Route path="components/config-table" element={<ConfigTablePage />} />
    <Route path="components/model-editor" element={<ModelEditorTest />} />
    <Route path="components/prompt-editor" element={<PromptEditorPage />} />
    <Route path="components/button-test" element={<ButtonPage />} /> 
    <Route path="components/close-button-test" element={<CloseButtonPage />} /> 
    <Route path="components/download-trigger" element={<DownloadTriggerPage />} />
    <Route path="components/icon-button-test" element={<IconButtonPage />} />
    <Route path="components/chat-actions" element={<ChatActionsPage />} />
    <Route path="components/chat-demo" element={<ChatDemoPage />} />
    <Route path="components/chat-message" element={<ChatMessagePage />} />
    <Route path="components/empty-state" element={<EmptyStatePage />} />
    <Route path="components/error-state" element={<ErrorStatePage />} />
    <Route path="components/layout-shell-test" element={<LayoutShellPage />} />
    <Route path="components/loader" element={<LoaderPage />} />
    <Route path="components/avatar" element={<AvatarPage />} />
    <Route path="components/badge" element={<BadgePage />} />
    <Route path="components/card" element={<CardPage />} />
    <Route path="components/clipboard" element={<ClipboardPage />} />
    <Route path="components/data-list" element={<DataListPage />} />
    <Route path="components/table" element={<TableComponentPage />} />
    <Route path="components/tags" element={<TagPage />} />
    <Route path="components/datepicker" element={<DatePickerPage />} />
    <Route path="components/accordion-test" element={<Accordion />} />
    <Route path="components/carousel-test" element={<Carousel />} />
    <Route path="components/collapsible-test" element={<Collapsible />} />
    <Route path="components/checkbox" element={<CheckboxPage />} />
    <Route path="components/fieldset" element={<FieldsetPage />} />
    <Route path="components/field" element={<FieldPage />} /> 
    <Route path="components/file-upload" element={<FileUploadPage />} />
    <Route path="components/input" element={<InputPage />} />
    <Route path="components/number-input" element={<NumberInputPage />} />
    <Route path="components/password-input" element={<PasswordInputPage />} />
    <Route path="components/RadioGroup" element={<RadioGroup />} />
    <Route path="components/sidebar" element={<Sidebar />} />
    <Route path="components/switch" element={<SwitchPage />} />
    <Route path="components/tagsInput" element={<TagsInputPage />} />
    <Route path="components/dropzone" element={<DropzonePage />} />
    <Route path="components/FileQueue" element={<FileQueuePage />} />
    <Route path="components/upload-progress" element={<UploadProgressPage />} />
  </Route>
);
