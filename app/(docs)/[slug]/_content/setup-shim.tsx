import { Step } from "@/app/docs/_components/step";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";
import { Note } from "../../_components/note";

export function SetupShimSection() {
  return (
    <Tabs>
      <TabList size={3} variant="underline">
        <Tab id="cli">CLI</Tab>
        <Tab id="manual">Manual</Tab>
      </TabList>

      <TabPanel className="py-8" id="cli">
        <p>The Shim CLI helps you set up your project and add components.</p>

        <Step
          code={[
            {
              title: "tsconfig.json",
              content: `{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./*"]
      }
    }
}`,
            },
          ]}
          description={
            <p>
              Shim components import files via the <strong>@/</strong> alias.
              <br />
              Configure the path in <strong>tsconfig.json</strong> (or{" "}
              <strong>jsconfig.json</strong>) so those imports resolve.
            </p>
          }
          reset
          title="Configure path alias"
        />

        <Step
          code="pnpm dlx @kkga/shim init"
          description={
            <p>
              Run the <code>init</code> command to initialize Shim.
              <br />
              It creates a <strong>shim.config.json</strong> file in your
              project root that defines where components, utility files, and CSS
              are installed.
            </p>
          }
          title="Initialize Shim"
        />

        <Step
          code="pnpm dlx @kkga/shim add button"
          description={
            <p>
              Use the <code>add</code> command to copy components into your
              project.
              <br />
              The CLI resolves dependencies, rewrites imports, and installs into
              the paths defined in <strong>shim.config.json</strong>.
            </p>
          }
          title="Add components"
        />
      </TabPanel>
      <TabPanel className="py-8" id="manual">
        <Note intent="warning" size={2} title="Todo">
          Manual setup instructions.
        </Note>
      </TabPanel>
    </Tabs>
  );
}
